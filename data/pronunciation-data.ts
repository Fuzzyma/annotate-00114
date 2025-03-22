// Define the sentences and languages
export const sentences = [
  "Hello, how are you today?",
  "The weather is beautiful outside.",
  "Learning new languages is fun!",
  "Technology is evolving rapidly.",
  "Let's go on an adventure.",
  "Good morning, have a great day!",
  "Music brings people together.",
  "Reading books expands knowledge.",
  "Hard work leads to success.",
  "Dream big and never give up.",
]

export const languages: Record<string, string> = {
  en: "English",
  zh: "Mandarin Chinese",
  es: "Spanish",
  hi: "Hindi",
  fr: "French",
}

// Translations for each language and sentence
export const translationData: Record<string, Record<number, string>> = {
  en: {
    0: "Hello, how are you today?",
    1: "The weather is beautiful outside.",
    2: "Learning new languages is fun!",
    3: "Technology is evolving rapidly.",
    4: "Let's go on an adventure.",
    5: "Good morning, have a great day!",
    6: "Music brings people together.",
    7: "Reading books expands knowledge.",
    8: "Hard work leads to success.",
    9: "Dream big and never give up.",
  },
  es: {
    0: "Hola, ¿cómo estás hoy?",
    1: "El clima está hermoso afuera.",
    2: "¡Aprender nuevos idiomas es divertido!",
    3: "La tecnología está evolucionando rápidamente.",
    4: "Vamos a una aventura.",
    5: "Buenos días, ¡que tengas un gran día!",
    6: "La música une a las personas.",
    7: "Leer libros amplía el conocimiento.",
    8: "El trabajo duro lleva al éxito.",
    9: "Sueña en grande y nunca te rindas.",
  },
  fr: {
    0: "Bonjour, comment allez-vous aujourd'hui?",
    1: "Le temps est magnifique dehors.",
    2: "Apprendre de nouvelles langues est amusant!",
    3: "La technologie évolue rapidement.",
    4: "Allons à l'aventure.",
    5: "Bonjour, passez une bonne journée!",
    6: "La musique rassemble les gens.",
    7: "Lire des livres étend la connaissance.",
    8: "Le travail acharné mène au succès.",
    9: "Rêvez grand et n'abandonnez jamais.",
  },
  zh: {
    0: "你好，今天你怎么样？",
    1: "外面的天气很好。",
    2: "学习新语言很有意思！",
    3: "技术正在快速发展。",
    4: "让我们去冒险吧。",
    5: "早上好，祝你有个好的一天！",
    6: "音乐让人们走到一起。",
    7: "阅读书籍可以扩展知识。",
    8: "努力工作会带来成功。",
    9: "勇敢追梦，永不放弃。",
  },
  hi: {
    0: "नमस्ते, आज आप कैसे हैं?",
    1: "बाहर मौसम बहुत सुंदर है।",
    2: "नई भाषाएं सीखना मजेदार है!",
    3: "प्रौद्योगिकी तेजी से विकसित हो रही है।",
    4: "आओ, साहसिक कार्य करें।",
    5: "सुप्रभात, आपका दिन शुभ हो!",
    6: "संगीत लोगों को एक साथ लाता है।",
    7: "किताबें पढ़ना ज्ञान का विस्तार करता है।",
    8: "कड़ी मेहनत सफलता की ओर ले जाती है।",
    9: "बड़े सपने देखो और कभी हार मत मानो।",
  },
}

// Phonetic transcriptions for each language and sentence (using proper IPA)
export const phoneticData: Record<string, Record<number, string>> = {
  en: {
    0: "həˈloʊ, haʊ ɑr juː təˈdeɪ?",
    1: "ðə ˈwɛðər ɪz ˈbjuːtəfəl ˈaʊtsaɪd.",
    2: "ˈlɜrnɪŋ nuː ˈlæŋɡwɪdʒɪz ɪz fʌn!",
    3: "tɛkˈnɑlədʒi ɪz ɪˈvɑlvɪŋ ˈræpɪdli.",
    4: "lɛts ɡoʊ ɑn ən ədˈvɛntʃər.",
    5: "ɡʊd ˈmɔrnɪŋ, hæv ə ɡreɪt deɪ!",
    6: "ˈmjuzɪk brɪŋz ˈpipəl təˈɡɛðər.",
    7: "ˈridɪŋ bʊks ɪkˈspændz ˈnɑlɪdʒ.",
    8: "hɑrd wɜrk lidz tu səkˈsɛs.",
    9: "drim bɪɡ ænd ˈnɛvər ɡɪv ʌp.",
  },
  es: {
    0: "ˈola, ˈkomo esˈtas oi?",
    1: "el ˈklima esˈta erˈmoso aˈfweɾa.",
    2: "apɾenˈdeɾ ˈnweβos iˈðjomas es diβeɾˈtiðo!",
    3: "la teknoloˈxia esˈta eβoluθjoˈnando ˈrapiðamente.",
    4: "ˈbamos a ˈuna aβenˈtuɾa.",
    5: "ˈbwenos ˈdias, ke ˈteŋgas un ɡɾan ˈdia!",
    6: "la ˈmusika ˈune a las peɾˈsonas.",
    7: "leˈeɾ ˈliβɾos amˈplia el konoθiˈmjento.",
    8: "el tɾaˈβaxo ˈduɾo ˈʎeβa al ˈeksito.",
    9: "ˈsweɲa en ˈɡɾande i ˈnuŋka te ˈrindas.",
  },
  fr: {
    0: "bɔ̃ʒuʁ, kɔmɑ̃ ale vu oʒuʁdɥi?",
    1: "lə tɑ̃ ɛ maɲifik dəɔʁ.",
    2: "apʁɑ̃dʁ də nuvɛl lɑ̃ɡ ɛt amyzɑ̃!",
    3: "la tɛknɔlɔʒi evɔly ʁapidmɑ̃.",
    4: "alɔ̃ a lavɑ̃tyʁ.",
    5: "bɔ̃ʒuʁ, pase yn bɔn ʒuʁne!",
    6: "la myzik ʁasɑ̃bl le ʒɑ̃.",
    7: "liʁ de livʁ etɑ̃ la kɔnesɑ̃s.",
    8: "lə tʁavaj aʃaʁne mɛn o sykse.",
    9: "ʁeve ɡʁɑ̃ e nabɑ̃done ʒamɛ.",
  },
  zh: {
    0: "nǐ hǎo, jīn tiān nǐ zěn me yàng?",
    1: "wài miàn de tiān qì hěn hǎo.",
    2: "xué xí xīn yǔ yán hěn yǒu yì si!",
    3: "jì shù zhèng zài kuài sù fā zhǎn.",
    4: "ràng wǒ men qù mào xiǎn ba.",
    5: "zǎo shang hǎo, zhù nǐ yǒu gè hǎo de yī tiān!",
    6: "yīn yuè ràng rén men zǒu dào yī qǐ.",
    7: "yuè dú shū kě yǐ kuò zhǎn zhī shì.",
    8: "nǔ lì gōng zuò huì dài lái chéng gōng.",
    9: "yǒng gǎn zhuī mèng, yǒng bù fàng qì.",
  },
  hi: {
    0: "nəməste, aːdʒ aːp kɛse hɛ̃?",
    1: "baːhər mɔsəm bəhʊt sʊndər hɛ.",
    2: "nəi bʰaːʂaːẽ siːkʰnaː məzedar hɛ!",
    3: "prɔdjoːgiki tedʒi se vikəsit ho rəhi hɛ.",
    4: "aːo, saːhəsik kaːrjə kərẽ.",
    5: "sʊprəbʰaːt, aːpkaː din ʃʊbʰ ho!",
    6: "səŋgiːt logõ ko ek saːtʰ laːtaː hɛ.",
    7: "kitaːbẽ pəɽʰnaː gjaːn kaː vistaːr kərtaː hɛ.",
    8: "kəɽi mehənət səpʰəltaː ki or le dʒaːti hɛ.",
    9: "bəɽe səpne dekʰo ɔr kəbʰi haːr mət maːno.",
  },
}

// Create a type for our practice item
export interface PracticeItem {
  id: string
  text: string
  translation: string
  language: string
  languageCode: string
  audioUrl: string
  sentenceIndex: number
  phonetic: string
}

// Generate practice items from the sentences and languages
export const generatePracticeItems = (): PracticeItem[] => {
  const items: PracticeItem[] = []

  Object.entries(languages).forEach(([langCode, langName]) => {
    sentences.forEach((sentence, index) => {
      // Get phonetic data and translation if available, or use empty defaults
      const phonetic = phoneticData[langCode]?.[index] || ""
      const translation = translationData[langCode]?.[index] || sentence

      items.push({
        id: `${langCode}_${index}`,
        text: sentence,
        translation: translation,
        language: langName,
        languageCode: langCode,
        audioUrl: `/audio/speech_${langCode}_${index}.mp3`,
        sentenceIndex: index,
        phonetic,
      })
    })
  })

  return items
}

export const PRACTICE_ITEMS = generatePracticeItems()

