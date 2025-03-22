"use client";

import type React from "react";

import {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { toast } from "sonner";

interface AudioWaveformProps {
  audioUrl: string;
  height?: number;
  barWidth?: number;
  barGap?: number;
  barColor?: string;
  onPlayPause?: (isPlaying: boolean) => void;
}

export const AudioWaveform = forwardRef(function AudioWaveform(
  {
    audioUrl,
    height = 64,
    barWidth = 3,
    barGap = 1,
    barColor = "hsl(var(--primary))",
    onPlayPause,
  }: AudioWaveformProps,
  ref
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waveformContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const [waveformData, setWaveformData] = useState<number[]>([]);
  const [canvasWidth, setCanvasWidth] = useState(1000);

  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  };

  const play = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          onPlayPause?.(true);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
          toast("Error playing audio", {
            description: "Sorry, but it seems something is wrong.",
          });
          onPlayPause?.(false);
        });
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    onPlayPause?.(false);
  };

  useImperativeHandle(ref, () => ({
    togglePlayPause: () => {
      if (audioRef.current) {
        audioRef.current.paused ? play() : pause();
      }
    },
    pause: () => {
      if (audioRef.current) {
        pause();
      }
    },
  }));

  // pause audio on unmount
  useEffect(() => pause, []);

  // Set up audio element for tracking playback
  useEffect(() => {
    setCurrentTime(0);

    if (!audioUrl) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.addEventListener("loadedmetadata", () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
        }
      });
      audioRef.current.addEventListener("ended", () => {
        onPlayPause?.(false);
      });
    } else {
      audioRef.current.src = audioUrl;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [audioUrl, onPlayPause]);

  // Process audio data and draw waveform
  useEffect(() => {
    if (!audioUrl || !canvasRef.current) return;

    setIsLoading(true);
    setError(null);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Update canvas width based on container width
    if (waveformContainerRef.current) {
      const containerWidth = waveformContainerRef.current.clientWidth;
      setCanvasWidth(containerWidth);
      canvas.width = containerWidth;
    }

    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    // Fetch and decode the audio file
    fetch(audioUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load audio file");
        }
        return response.arrayBuffer();
      })
      .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        setIsLoading(false);
        setDuration(audioBuffer.duration);

        // Create an offline audio context to process the entire file
        const offlineCtx = new OfflineAudioContext(
          audioBuffer.numberOfChannels,
          audioBuffer.length,
          audioBuffer.sampleRate
        );

        // Create a buffer source
        const source = offlineCtx.createBufferSource();
        source.buffer = audioBuffer;

        // Connect the source to the analyser
        const offlineAnalyser = offlineCtx.createAnalyser();
        offlineAnalyser.fftSize = 256;
        source.connect(offlineAnalyser);
        offlineAnalyser.connect(offlineCtx.destination);

        // Start the source
        source.start(0);

        // Process the audio
        offlineCtx.startRendering().then((renderedBuffer) => {
          // Get the time domain data
          const channelData = renderedBuffer.getChannelData(0);

          // Resample the data to fit our canvas width
          const canvas = canvasRef.current;
          if (!canvas || !ctx) return;

          // Clear the canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Calculate how many samples we need to skip to fit the canvas
          const step = Math.ceil(
            channelData.length / (canvas.width / (barWidth + barGap))
          );
          const amplitudeData: number[] = [];

          // Get the max amplitude for each step
          for (let i = 0; i < channelData.length; i += step) {
            let max = 0;
            for (let j = 0; j < step && i + j < channelData.length; j++) {
              const amplitude = Math.abs(channelData[i + j]);
              if (amplitude > max) max = amplitude;
            }
            amplitudeData.push(max);
          }

          // Store waveform data for later use
          setWaveformData(amplitudeData);

          // Draw the waveform
          drawWaveform(
            ctx,
            canvas,
            amplitudeData,
            barWidth,
            barGap,
            barColor,
            0
          );
        });
      })
      .catch((err) => {
        console.error("Error processing audio:", err);
        setError("Failed to process audio");
        setIsLoading(false);
      });

    return () => {
      audioContext.close();
    };
  }, [audioUrl, barWidth, barGap, barColor]);

  // Redraw waveform when currentTime changes
  useEffect(() => {
    if (!canvasRef.current || waveformData.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw the waveform with progress indicator
    drawWaveform(
      ctx,
      canvas,
      waveformData,
      barWidth,
      barGap,
      barColor,
      currentTime / duration
    );
  }, [currentTime, duration, waveformData, barWidth, barGap, barColor]);

  // Function to draw the waveform with progress
  const drawWaveform = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    amplitudeData: number[],
    barWidth: number,
    barGap: number,
    barColor: string,
    progress: number
  ) => {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const progressPosition = canvas.width * progress;

    const barCount = Math.floor(canvas.width / (barWidth + barGap));
    for (let i = 0; i < barCount && i < amplitudeData.length; i++) {
      const x = i * (barWidth + barGap);
      const barHeight = amplitudeData[i] * canvas.height;
      const y = (canvas.height - barHeight) / 2;

      // Change color based on progress
      if (x <= progressPosition) {
        ctx.fillStyle = "hsl(var(--primary))";
      } else {
        ctx.fillStyle = "hsl(var(--muted-foreground) / 0.5)";
      }

      ctx.fillRect(x, y, barWidth, barHeight > 0 ? barHeight : 1);
    }

    // Draw progress cursor
    if (progress > 0) {
      ctx.fillStyle = "hsl(var(--destructive))";
      ctx.fillRect(progressPosition, 0, 2, canvas.height);
    }
  };

  // Handle click on waveform to set playback position
  const handleWaveformClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!audioRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickPosition = clickX / canvas.width;

    // Set audio position
    audioRef.current.currentTime = duration * clickPosition;
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className="relative w-full" ref={waveformContainerRef}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <div className="animate-pulse">Loading waveform...</div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <div className="text-destructive">{error}</div>
        </div>
      )}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={height}
          className="w-full h-auto cursor-pointer"
          onClick={handleWaveformClick}
        />
      </div>
      {duration > 0 && (
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      )}
    </div>
  );
});

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
