import { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'

import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Footer } from './components/footer/Footer'

const languageAliases = {
  en: 'english',
  english: 'english',

  ur: 'urdu',
  urdu: 'urdu',

  ar: 'arabic',
  arabic: 'arabic',

  es: 'spanish',
  spanish: 'spanish',
}

const languageDirections = {
  english: 'ltr',
  urdu: 'rtl',
  arabic: 'rtl',
  spanish: 'ltr',
}

const languageCodes = {
  english: 'en',
  urdu: 'ur',
  arabic: 'ar',
  spanish: 'es',
}

const definitions = [
  {
    type: 'Verb',

    headings: {
      english: 'Verb',
      urdu: 'فعل',
      arabic: 'فعل',
      spanish: 'Verbo',
    },

    words: {
      english: 'welcome',
      urdu: 'خوش آمدید کہنا',
      arabic: 'يرحّب',
      spanish: 'dar la bienvenida',
    },

    english:
      'greet, salute, receive, meet, embrace, fete, usher in, greet, salute, receive, meet, embrace, fete, usher in',

    urdu:
      'سلام کرنا، سلام کرنا، وصول کرنا، ملنا، گلے لگانا، گلے لگانا، آگہی کرنا، سلام کرنا، سلام کرنا، وصول کرنا، ملنا، گلے لگانا، گلے لگانا، گلے لگانا، اندر داخل ہونا۔',

    arabic:
      'يحيّي، يسلّم، يستقبل، يقابل، يعانق، يحتفي، يُدخل، يرحّب، يستقبل، يقابل، يعانق.',

    spanish:
      'saludar, recibir, encontrarse, abrazar, agasajar, dar la bienvenida, acompañar al interior.',
  },

  {
    type: 'Adjective',

    headings: {
      english: 'Adjective',
      urdu: 'صفت',
      arabic: 'صفة',
      spanish: 'Adjetivo',
    },

    words: {
      english: 'welcome',
      urdu: 'خوش آئند',
      arabic: 'مرغوب',
      spanish: 'bienvenido',
    },

    english:
      'wanted, appreciated, popular, desireable, accepted, acceptable, pleasing, agreeable, gratifying, heartening, promising',

    urdu:
      'چاہتا تھا، تعریف کی، مقبول، خواہش مند، قابل قبول، قابل قبول، خوشگوار، راضی، اطمینان بخش، حوصلہ افزائی، وعدہ',

    arabic:
      'مرغوب، مقدّر، شائع، مطلوب، مقبول، مستساغ، سار، مرضٍ، مشجّع، واعد.',

    spanish:
      'deseado, apreciado, popular, aceptado, agradable, satisfactorio, grato, alentador, prometedor.',
  },

  {
    type: 'Noun',

    headings: {
      english: 'Noun',
      urdu: 'اسم',
      arabic: 'اسم',
      spanish: 'Sustantivo',
    },

    words: {
      english: 'welcome',
      urdu: 'استقبال',
      arabic: 'ترحيب',
      spanish: 'bienvenida',
    },

    english:
      'greetings, salutation, hail, welcoming, reception, warm reception, favourable reception, acceptance, hospitality, red carpet,',

    urdu:
      'سلام، سلام، اولے، استقبال، استقبال، استقبال، گرم استقبال، سازگار استقبال، قبولیت، مہمان نوازی، سرخ قالین،',

    arabic:
      'تحية، سلام، ترحيب، استقبال، استقبال حار، استقبال إيجابي، قبول، ضيافة، حفاوة، بساط أحمر.',

    spanish:
      'saludo, bienvenida, recepción, cálida recepción, acogida favorable, aceptación, hospitalidad, alfombra roja.',
  },
]

const commonWords = [
  {
    id: 1,
    english: 'you’re welcome',
    urdu: 'خوش آمدید',
  },
  {
    id: 2,
    english: 'you’re welcome',
    urdu: 'خوش آمدید',
  },
  {
    id: 3,
    english: 'you’re welcome',
    urdu: 'خوش آمدید',
  },
  {
    id: 4,
    english: 'you’re welcome',
    urdu: 'خوش آمدید',
  },
]

const normalizeLanguage = (value, fallback) => {
  if (!value) {
    return fallback
  }

  const normalizedValue = String(value)
    .replaceAll('"', '')
    .trim()
    .toLowerCase()

  return languageAliases[normalizedValue] || fallback
}

const readLanguageFromLocalStorage = (keys, fallback) => {
  if (typeof window === 'undefined') {
    return fallback
  }

  for (const key of keys) {
    const storedValue = window.localStorage.getItem(key)

    if (storedValue) {
      return normalizeLanguage(storedValue, fallback)
    }
  }

  return fallback
}

const getStoredSourceLanguage = () => {
  return readLanguageFromLocalStorage(
    [
      'urdubanSourceLanguage',
      'sourceLanguage',
      'selectedSourceLanguage',
    ],
    'english',
  )
}

const getStoredTargetLanguage = () => {
  return readLanguageFromLocalStorage(
    [
      'urdubanTargetLanguage',
      'targetLanguage',
      'selectedTargetLanguage',
    ],
    'urdu',
  )
}

const Definitions = ({
  sourceLanguage,
  targetLanguage,
}) => {
  return (
    <section
      className="definitions"
      aria-label="Welcome definitions"
    >
      {definitions.map((definition) => (
        <article
          className="definition"
          key={definition.type}
        >
          <h2
            dir={languageDirections[sourceLanguage]}
            lang={languageCodes[sourceLanguage]}
          >
            {definition.headings[sourceLanguage]}:{' '}
            <span>{definition.words[sourceLanguage]}</span>
          </h2>

          <div className="definition-pair">
            <p
              dir={languageDirections[sourceLanguage]}
              lang={languageCodes[sourceLanguage]}
            >
              {definition[sourceLanguage]}
            </p>

            <p
              className="urdu-copy"
              dir={languageDirections[targetLanguage]}
              lang={languageCodes[targetLanguage]}
            >
              {definition[targetLanguage]}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}

const CommonWords = ({
  words,
  onRemoveWord,
}) => {
  return (
    <section
      className="common-words"
      aria-labelledby="common-words-title"
    >
      <div className="common-heading">
        <h2 id="common-words-title">
          Most Common Words:
        </h2>

        <div
          className="carousel-arrows"
          aria-hidden="true"
        >
          <i className="fa-solid fa-chevron-left" />
          <i className="fa-solid fa-chevron-right" />
        </div>
      </div>

      <div className="word-cards">
        {words.map((word) => (
          <article
            className="word-card"
            key={word.id}
          >
            <button
              type="button"
              aria-label="Remove word card"
              onClick={() => onRemoveWord(word.id)}
            >
              <i
                className="fa-solid fa-xmark"
                aria-hidden="true"
              />
            </button>

            <p>{word.english}</p>

            <p
              className="word-card-urdu"
              dir="rtl"
              lang="ur"
            >
              {word.urdu}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState(
    getStoredSourceLanguage,
  )

  const [targetLanguage, setTargetLanguage] = useState(
    getStoredTargetLanguage,
  )

  const [visibleCommonWords, setVisibleCommonWords] =
    useState(commonWords)

  useEffect(() => {
    const updateSelectedLanguages = () => {
      const nextSourceLanguage =
        getStoredSourceLanguage()

      const nextTargetLanguage =
        getStoredTargetLanguage()

      setSourceLanguage((currentLanguage) =>
        currentLanguage === nextSourceLanguage
          ? currentLanguage
          : nextSourceLanguage,
      )

      setTargetLanguage((currentLanguage) =>
        currentLanguage === nextTargetLanguage
          ? currentLanguage
          : nextTargetLanguage,
      )
    }

    updateSelectedLanguages()

    /*
      The storage event does not run in the same browser tab
      that changed localStorage, so the interval keeps this
      component synchronized with the Header selections.
    */
    const intervalId = window.setInterval(
      updateSelectedLanguages,
      200,
    )

    window.addEventListener(
      'storage',
      updateSelectedLanguages,
    )

    return () => {
      window.clearInterval(intervalId)

      window.removeEventListener(
        'storage',
        updateSelectedLanguages,
      )
    }
  }, [])

  const removeCommonWord = (wordId) => {
    setVisibleCommonWords((currentWords) =>
      currentWords.filter((word) => word.id !== wordId),
    )
  }

  return (
    <div
      id="top"
      className="app-shell"
    >
      <Navbar />

      <main>
        <Header />

        <div className="body-zone">
          <div className="content-layout">
            <Definitions
              sourceLanguage={sourceLanguage}
              targetLanguage={targetLanguage}
            />

            <Sidebar />
          </div>
        </div>

        <CommonWords
          words={visibleCommonWords}
          onRemoveWord={removeCommonWord}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App