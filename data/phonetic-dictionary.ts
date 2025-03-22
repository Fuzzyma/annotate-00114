// A comprehensive dictionary of phonetic symbols and their explanations
export const phoneticDictionary: Record<
  string,
  {
    explanation: string;
    examples: Record<string, string[]>; // Language code -> examples
  }
> = {
  // Vowels
  a: {
    explanation: "Open front unrounded vowel",
    examples: {
      en: ["father", "car"],
      es: ["casa", "hablar"],
      fr: ["chat", "pas"],
      hi: ["aap", "ab"],
    },
  },
  ā: {
    explanation: "Long open front unrounded vowel",
    examples: {
      hi: ["aap", "kaam"],
    },
  },
  ɑ: {
    explanation: "Open back unrounded vowel",
    examples: {
      en: ["hot", "father"],
      fr: ["pas", "là"],
    },
  },
  ɑr: {
    explanation: "Open back unrounded vowel + rhotic",
    examples: {
      en: ["car", "far"],
    },
  },
  æ: {
    explanation: "Near-open front unrounded vowel",
    examples: {
      en: ["cat", "bad"],
    },
  },
  ɛ: {
    explanation: "Open-mid front unrounded vowel",
    examples: {
      en: ["bed", "red"],
      fr: ["belle", "faire"],
    },
  },
  e: {
    explanation: "Close-mid front unrounded vowel",
    examples: {
      es: ["este", "que"],
      fr: ["été", "les"],
      hi: ["ek", "mera"],
    },
  },
  ə: {
    explanation: "Schwa - mid-central vowel",
    examples: {
      en: ["about", "sofa"],
      fr: ["le", "de"],
    },
  },
  ər: {
    explanation: "Rhotacized mid-central vowel",
    examples: {
      en: ["her", "worker"],
    },
  },
  ɜr: {
    explanation: "Open-mid central rounded vowel + rhotic",
    examples: {
      en: ["bird", "learn"],
    },
  },
  i: {
    explanation: "Close front unrounded vowel",
    examples: {
      en: ["see", "me"],
      es: ["si", "mi"],
      fr: ["si", "ici"],
    },
  },
  ɪ: {
    explanation: "Near-close near-front unrounded vowel",
    examples: {
      en: ["bit", "sit"],
    },
  },
  o: {
    explanation: "Close-mid back rounded vowel",
    examples: {
      en: ["go", "no"],
      es: ["oso", "todo"],
      zh: ["hǎo (好)", "duō (多)"],
    },
  },
  ɔ: {
    explanation: "Open-mid back rounded vowel",
    examples: {
      en: ["thought", "law"],
      fr: ["fort", "or"],
    },
  },
  ɔ̃: {
    explanation: "Nasalized open-mid back rounded vowel",
    examples: {
      fr: ["bon", "long"],
    },
  },
  u: {
    explanation: "Close back rounded vowel",
    examples: {
      en: ["blue", "you"],
      es: ["tu", "uno"],
      fr: ["vous", "tout"],
    },
  },
  ʊ: {
    explanation: "Near-close near-back rounded vowel",
    examples: {
      en: ["book", "good"],
    },
  },
  uː: {
    explanation: "Close back rounded vowel (long)",
    examples: {
      en: ["blue", "you"],
    },
  },
  ʌ: {
    explanation: "Open-mid back unrounded vowel",
    examples: {
      en: ["cup", "luck"],
    },
  },

  // Diphthongs
  aɪ: {
    explanation: "Diphthong - open front unrounded to close front unrounded",
    examples: {
      en: ["my", "side"],
    },
  },
  aʊ: {
    explanation: "Diphthong - open front unrounded to close back rounded",
    examples: {
      en: ["how", "now"],
    },
  },
  eɪ: {
    explanation:
      "Diphthong - close-mid front unrounded to close front unrounded",
    examples: {
      en: ["day", "say"],
    },
  },
  oʊ: {
    explanation: "Diphthong - close-mid back rounded to close back rounded",
    examples: {
      en: ["go", "boat"],
    },
  },

  // Consonants
  b: {
    explanation: "Voiced bilabial plosive",
    examples: {
      en: ["boy", "bad"],
      es: ["boca", "bien"],
      fr: ["bon", "bien"],
      hi: ["baat", "bahut"],
    },
  },
  d: {
    explanation: "Voiced alveolar plosive",
    examples: {
      en: ["day", "do"],
      es: ["donde", "dar"],
      fr: ["dans", "de"],
    },
  },
  ð: {
    explanation: "Voiced dental fricative",
    examples: {
      en: ["the", "this"],
    },
  },
  f: {
    explanation: "Voiceless labiodental fricative",
    examples: {
      en: ["fun", "if"],
      es: ["fácil", "café"],
      fr: ["faire", "feu"],
    },
  },
  g: {
    explanation: "Voiced velar plosive",
    examples: {
      en: ["go", "big"],
      es: ["gato", "grande"],
      fr: ["gare", "gâteau"],
    },
  },
  ɡ: {
    explanation: "Voiced velar plosive",
    examples: {
      en: ["go", "big"],
    },
  },
  h: {
    explanation: "Voiceless glottal fricative",
    examples: {
      en: ["hat", "ahead"],
      zh: ["hǎo (好)", "hē (喝)"],
    },
  },
  j: {
    explanation: "Palatal approximant",
    examples: {
      en: ["yes", "you"],
      es: ["yo", "ya"],
    },
  },
  k: {
    explanation: "Voiceless velar plosive",
    examples: {
      en: ["cat", "key"],
      es: ["casa", "que"],
      fr: ["qui", "quand"],
    },
  },
  l: {
    explanation: "Alveolar lateral approximant",
    examples: {
      en: ["light", "play"],
      es: ["lado", "el"],
      fr: ["le", "il"],
    },
  },
  m: {
    explanation: "Bilabial nasal",
    examples: {
      en: ["me", "mom"],
      es: ["madre", "mi"],
      fr: ["mère", "mon"],
      hi: ["mera", "main"],
    },
  },
  n: {
    explanation: "Alveolar nasal",
    examples: {
      en: ["no", "in"],
      es: ["no", "en"],
      fr: ["non", "une"],
      hi: ["namaste", "nahi"],
      zh: ["nǐ (你)", "nà (那)"],
    },
  },
  ŋ: {
    explanation: "Velar nasal",
    examples: {
      en: ["sing", "thing"],
    },
  },
  p: {
    explanation: "Voiceless bilabial plosive",
    examples: {
      en: ["pen", "stop"],
      es: ["padre", "por"],
      fr: ["père", "pas"],
    },
  },
  r: {
    explanation: "Alveolar approximant",
    examples: {
      en: ["red", "run"],
      es: ["rojo", "pero"],
    },
  },
  s: {
    explanation: "Voiceless alveolar fricative",
    examples: {
      en: ["see", "pass"],
      es: ["sí", "casa"],
      fr: ["si", "passer"],
      hi: ["sab", "saath"],
    },
  },
  t: {
    explanation: "Voiceless alveolar plosive",
    examples: {
      en: ["top", "stop"],
      es: ["tu", "tomar"],
      fr: ["tu", "table"],
      hi: ["tum", "tera"],
    },
  },
  v: {
    explanation: "Voiced labiodental fricative",
    examples: {
      en: ["very", "have"],
      fr: ["vous", "voir"],
    },
  },
  w: {
    explanation: "Labial-velar approximant",
    examples: {
      en: ["way", "win"],
      zh: ["wǒ (我)", "wàn (万)"],
    },
  },
  z: {
    explanation: "Voiced alveolar fricative",
    examples: {
      en: ["zoo", "is"],
      fr: ["zéro", "maison"],
    },
  },
  ʒ: {
    explanation: "Voiced postalveolar fricative",
    examples: {
      en: ["measure", "vision"],
      fr: ["je", "jour"],
    },
  },
  ʃ: {
    explanation: "Voiceless postalveolar fricative",
    examples: {
      en: ["she", "ship"],
      fr: ["chaud", "chercher"],
    },
  },
  θ: {
    explanation: "Voiceless dental fricative",
    examples: {
      en: ["think", "thin"],
    },
  },
  ʁ: {
    explanation: "Voiced uvular fricative",
    examples: {
      fr: ["rouge", "Paris"],
    },
  },
  tʃ: {
    explanation: "Voiceless postalveolar affricate",
    examples: {
      en: ["church", "watch"],
    },
  },
  dʒ: {
    explanation: "Voiced postalveolar affricate",
    examples: {
      en: ["judge", "jam"],
    },
  },

  // Spanish specific
  β: {
    explanation: "Voiced bilabial fricative",
    examples: {
      es: ["haber", "saber"],
    },
  },
  ɾ: {
    explanation: "Alveolar tap",
    examples: {
      es: ["pero", "caro"],
    },
  },
  ʎ: {
    explanation: "Palatal lateral approximant",
    examples: {
      es: ["llamar", "llover"],
    },
  },

  // Mandarin specific
  ǐ: {
    explanation: "Close front unrounded vowel with rising tone",
    examples: {
      zh: ["nǐ (你)", "lǐ (里)"],
    },
  },
  ǎ: {
    explanation: "Open front unrounded vowel with dipping tone",
    examples: {
      zh: ["hǎo (好)", "mǎ (马)"],
    },
  },
  à: {
    explanation: "Open front unrounded vowel with falling tone",
    examples: {
      zh: ["mà (骂)", "dà (大)"],
    },
  },

  // Hindi specific
  ʰ: {
    explanation: "Aspiration",
    examples: {
      hi: ["bʰai", "kʰana"],
    },
  },
  ɛ̃: {
    explanation: "Nasalized open-mid front unrounded vowel",
    examples: {
      hi: ["hɛ̃", "mɛ̃"],
    },
  },

  // Stress and other markers
  ˈ: {
    explanation: "Primary stress on following syllable",
    examples: {
      en: ["aˈbout", "beˈfore"],
      es: ["esˈtá", "haˈblar"],
      fr: ["aˈlors", "parˈfait"],
    },
  },
  ˌ: {
    explanation: "Secondary stress on following syllable",
    examples: {
      en: ["ˌinterˈnational", "ˌunderˈstanding"],
    },
  },
  ".": {
    explanation: "Syllable boundary",
    examples: {
      en: ["re.act", "co.op"],
    },
  },
};

// Helper function to get phonetic symbol information
export function getPhoneticInfo(symbol: string, languageCode = "en") {
  // Try to find the exact symbol
  let info = phoneticDictionary[symbol];

  // If not found, try to find a compound symbol that contains this symbol
  if (!info) {
    // Look for compound symbols that might contain this symbol
    const possibleCompounds = Object.keys(phoneticDictionary).filter(
      (key) => key.length > 1 && key.includes(symbol)
    );

    if (possibleCompounds.length > 0) {
      // Use the first compound symbol that contains our symbol
      info = phoneticDictionary[possibleCompounds[0]];
    }
  }

  if (!info) {
    // Return a default if nothing is found
    return {
      explanation: `Phonetic symbol: ${symbol}`,
      examples: [],
    };
  }

  // Get examples for the current language, or fall back to English examples
  const examples = info.examples[languageCode] || info.examples.en || [];

  return {
    explanation: info.explanation,
    examples,
  };
}
