import { PronunciationGuide } from "@/components/pronunciation-guide"

export default function Home() {
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Multilingual Pronunciation Guide</h1>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Practice pronunciation in multiple languages with real-time feedback. Select a language and sentence, listen to
        the reference, and record your own voice to compare.
      </p>
      <PronunciationGuide />
    </main>
  )
}

