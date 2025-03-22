"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Mic, Square, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAudioRecorder } from "@/hooks/use-audio-recorder";
import { AudioWaveform } from "@/components/audio-waveform";
import { PhoneticSymbol } from "@/components/phonetic-symbol";
import {
  languages,
  sentences,
  PRACTICE_ITEMS,
} from "@/data/pronunciation-data";
import type { PracticeItem } from "@/data/pronunciation-data";

export function PronunciationGuide() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [selectedSentenceIndex, setSelectedSentenceIndex] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<PracticeItem>(
    PRACTICE_ITEMS.find(
      (item) => item.languageCode === "en" && item.sentenceIndex === 0
    )!
  );
  const [referenceAudio, setReferenceAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [isReferenceAudioPlaying, setIsReferenceAudioPlaying] = useState(false);
  const [isRecordedAudioPlaying, setIsRecordedAudioPlaying] = useState(false);

  const {
    isRecording,
    startRecording,
    stopRecording,
    recordedAudio,
    recordingTime,
    resetRecording,
  } = useAudioRecorder();

  // Update selected item when language or sentence changes
  useEffect(() => {
    const item = PRACTICE_ITEMS.find(
      (item) =>
        item.languageCode === selectedLanguage &&
        item.sentenceIndex === selectedSentenceIndex
    );

    if (item) {
      setSelectedItem(item);
    }
  }, [selectedLanguage, selectedSentenceIndex]);

  const handleLanguageChange = (value: string) => {
    stopReferenceAudio();
    stopRecordedAudio();
    resetRecording();
    setSelectedLanguage(value);
  };

  const handleSentenceChange = (value: string) => {
    const index = Number.parseInt(value, 10);
    stopReferenceAudio();
    stopRecordedAudio();
    resetRecording();
    setSelectedSentenceIndex(index);
  };

  const handleRecordButtonClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      resetRecording();
      startRecording();
    }
  };

  const referenceAudioRef = useRef<{
    togglePlayPause: () => void;
    pause: () => void;
  } | null>(null);
  const toggleReferencePlayPause = () => {
    referenceAudioRef.current!.togglePlayPause();
  };

  const stopReferenceAudio = () => {
    if (referenceAudioRef.current) {
      referenceAudioRef.current.pause();
    }
  };

  const recordedAudioRef = useRef<{
    togglePlayPause: () => void;
    pause: () => void;
  } | null>(null);
  const toggleRecordedPlayPause = () => {
    recordedAudioRef.current!.togglePlayPause();
  };

  const stopRecordedAudio = () => {
    if (recordedAudioRef.current) {
      recordedAudioRef.current.pause();
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Pronunciation Guide</CardTitle>
        <CardDescription>
          Listen to the correct pronunciation, record your voice, and compare
          them
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="language-select" className="text-sm font-medium">
              Select a language
            </label>
            <Select
              value={selectedLanguage}
              onValueChange={handleLanguageChange}
            >
              <SelectTrigger id="language-select" className="w-full">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(languages).map(([code, name]) => (
                  <SelectItem key={code} value={code}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="sentence-select" className="text-sm font-medium">
              Select a sentence
            </label>
            <Select
              value={selectedSentenceIndex.toString()}
              onValueChange={handleSentenceChange}
            >
              <SelectTrigger id="sentence-select" className="w-full">
                <SelectValue placeholder="Select a sentence" />
              </SelectTrigger>
              <SelectContent>
                {sentences.map((sentence, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {sentence.length > 30
                      ? sentence.substring(0, 30) + "..."
                      : sentence}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Phrase display with phonetic transcription */}
        <div className="p-6 bg-muted rounded-lg flex flex-col items-center justify-center">
          {/* Original English sentence */}
          <p className="text-muted-foreground mb-2 text-center">
            {selectedItem.text}
          </p>

          {/* Translated sentence in target language */}
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">
            {selectedItem.translation}
          </h2>
          <p className="text-muted-foreground mb-1">{selectedItem.language}</p>

          {/* Phonetic transcription */}
          {selectedItem.phonetic && (
            <div className="mb-4 text-lg">
              {selectedItem.phonetic
                .split("")
                .map((char, index) =>
                  char.trim() ? (
                    <PhoneticSymbol
                      key={index}
                      symbol={char}
                      languageCode={selectedItem.languageCode}
                    />
                  ) : (
                    <span key={index}>{char}</span>
                  )
                )}
            </div>
          )}
        </div>

        {/* Reference Audio Waveform */}
        <div className="p-4 border rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Reference Pronunciation</h3>
            <Button
              onClick={toggleReferencePlayPause}
              variant="ghost"
              size="sm"
              className="gap-1"
            >
              {isReferenceAudioPlaying ? (
                <>
                  <Square className="h-3 w-3" />
                  Stop
                </>
              ) : (
                <>
                  <Play className="h-3 w-3" />
                  Play
                </>
              )}
            </Button>
          </div>
          <AudioWaveform
            ref={referenceAudioRef}
            audioUrl={selectedItem.audioUrl}
            onPlayPause={setIsReferenceAudioPlaying}
          />
        </div>

        {/* User Recording Waveform */}
        {recordedAudio && !isRecording && (
          <div className="p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Your Recording</h3>
              <Button
                onClick={toggleRecordedPlayPause}
                variant="ghost"
                size="sm"
                className="gap-1"
              >
                {isRecordedAudioPlaying ? (
                  <>
                    <Square className="h-3 w-3" />
                    Stop
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3" />
                    Play
                  </>
                )}
              </Button>
            </div>
            <AudioWaveform
              audioUrl={recordedAudio}
              ref={recordedAudioRef}
              onPlayPause={setIsRecordedAudioPlaying}
            />
          </div>
        )}

        {/* Recording Controls */}
        <div className="flex flex-col items-center justify-center p-6 border rounded-lg">
          <div className="text-center mb-4">
            {isRecording ? (
              <div className="text-red-500 animate-pulse font-medium">
                Recording... {recordingTime}s
              </div>
            ) : (
              <div className="text-muted-foreground">
                {recordedAudio ? "Recording complete" : "Ready to record"}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleRecordButtonClick}
              variant={isRecording ? "destructive" : "default"}
              size="lg"
              className="gap-2"
            >
              {isRecording ? (
                <>
                  <Square className="h-4 w-4" />
                  Stop Recording
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4" />
                  Start Recording
                </>
              )}
            </Button>

            {recordedAudio && !isRecording && (
              <Button
                onClick={resetRecording}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Reset
              </Button>
            )}
          </div>
        </div>

        {/* Pronunciation Tips */}
        {recordedAudio && !isRecording && (
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-medium mb-2">Pronunciation Tips</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Listen to the reference multiple times</li>
              <li>Pay attention to the rhythm and intonation</li>
              <li>
                Focus on the phonetic symbols that are challenging for you
              </li>
              <li>Practice regularly for best results</li>
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-muted-foreground">
          Practice makes perfect! Try all sentences in different languages.
        </p>
      </CardFooter>
    </Card>
  );
}
