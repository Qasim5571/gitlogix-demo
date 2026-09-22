import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'

import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Footer } from './components/footer/Footer'

const definitions = [
  {
    type: 'Verb',
    english:
      'greet, salute, receive, meet, embrace, fete, usher in, greet, salute, receive, meet, embrace, fete, usher in',
    urdu:
      'سلام کرنا، سلام کرنا، وصول کرنا، ملنا، گلے لگانا، گلے لگانا، آگہی کرنا، سلام کرنا، سلام کرنا، وصول کرنا، ملنا، گلے لگانا، گلے لگانا، گلے لگانا، اندر داخل ہونا۔',
  },
  {
    type: 'Adjective',
    english:
      'wanted, appreciated, popular, desireable, accepted, acceptable, pleasing, agreeable, gratifying, heartening, promising',
    urdu:
      'چاہتا تھا، تعریف کی، مقبول، خواہش مند، قابل قبول، قابل قبول، خوشگوار، راضی، اطمینان بخش، حوصلہ افزائی، وعدہ',
  },
  {
    type: 'Noun',
    english:
      'greetings, salutation, hail, welcoming, reception, warm reception, favourable reception, acceptance, hospitality, red carpet,',
    urdu:
      'سلام، سلام، اولے، استقبال، استقبال، استقبال، گرم استقبال، سازگار استقبال، قبولیت، مہمان نوازی، سرخ قالین،',
  },
]

const commonWords = [{
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
}]

const Definitions = () => {
  return (
    <section className="definitions" aria-label="Welcome definitions">
      {definitions.map((definition) => (
        <article className="definition" key={definition.type}>
          <h2>
            {definition.type}: <span>welcome</span>
          </h2>
          <div className="definition-pair">
            <p>{definition.english}</p>
            <p className="urdu-copy" dir="rtl" lang="ur">
              {definition.urdu}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}
const CommonWords = () => {
  return (
    <section className="common-words" aria-labelledby="common-words-title">
      <div className="common-heading">
        <h2 id="common-words-title">Most Common Words:</h2>
        <div className="carousel-arrows" aria-hidden="true">
          <i className="fa-solid fa-chevron-left" />
          <i className="fa-solid fa-chevron-right" />
        </div>
      </div>

      <div className="word-cards">
        {commonWords.map((word) => (
          <article className="word-card" key={word.id}>
            <button type="button" aria-label="Remove word card">
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
            <p>{word.english}</p>
            <p className="word-card-urdu" dir="rtl" lang="ur">
              {word.urdu}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

const App = () => {
  return (
    <div id="top" className="app-shell">
      <Navbar />
      <main>
        <Header />
        <div className="body-zone">
          <div className="content-layout">
            <Definitions />
            <Sidebar />
          </div>
        </div>
        <CommonWords />
      </main>
      <Footer />
    </div>
  )
}

export default App
