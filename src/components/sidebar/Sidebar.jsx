import './Sidebar.css'
// import AppStoreBadges from '../../assets/app-store-badges.png'
import AppleStore from '../../assets/apple-store.png'
import AndroidStore from '../../assets/android-store.png'
import MailAd from '../../assets/mail-ad.png'

const otherWordsByLanguage = {
  en: [
    'Welcoming', 'Well', 'Wellness', 'Welcomes', 'Welcomed', 'Welcome mat',
    'Welcoming', 'Well', 'Wellness', 'Welcomes', 'Welcomed', 'Welcome mat',
  ],
  ur: [
    'خوش آئند', 'اچھا', 'تندرستی', 'خوش آمدید کہتا ہے', 'خوش آمدید کہا', 'خوش آمدید کی چٹائی',
    'خوش آئند', 'اچھا', 'تندرستی', 'خوش آمدید کہتا ہے', 'خوش آمدید کہا', 'خوش آمدید کی چٹائی',
  ],
  ar: [
    'ترحيبي', 'جيد', 'العافية', 'يرحب', 'مُرحب به', 'سجادة ترحيب',
    'ترحيبي', 'جيد', 'العافية', 'يرحب', 'مُرحب به', 'سجادة ترحيب',
  ],
  es: [
    'Acogedor', 'Bien', 'Bienestar', 'Da la bienvenida', 'Bienvenido', 'Felpudo de bienvenida',
    'Acogedor', 'Bien', 'Bienestar', 'Da la bienvenida', 'Bienvenido', 'Felpudo de bienvenida',
  ],
}
export const Sidebar = () => {

  const targetLanguage =
    localStorage.getItem('urdubanTargetLanguage') || 'ur'

  const otherWords =
    otherWordsByLanguage[targetLanguage] || otherWordsByLanguage.ur

  const isRtl = targetLanguage === 'ur' || targetLanguage === 'ar'

  return (
    <aside className="sidebar" aria-label="Related content">
      <section className="download-card">
        <h2>Download Our Mobile App!</h2>
        <div className='AppStoreBadges'>
          <img
            src={AndroidStore}
            alt="Get it on Google Play and download on the App Store"
            onClick={() => window.open('https://www.google.com/', '_blank', 'noopener,noreferrer')}
          />
          <img
            src={AppleStore}
            alt="Get it on Google Play and download on the App Store"
            onClick={() => window.open('https://www.google.com/', '_blank', 'noopener,noreferrer')}
          />
        </div>
      </section>

      <section className="email-ad">
        <img src={MailAd} alt="Mail app notification" />
        <p>Want to automate your emails?</p>
        <button type="button" onClick={() => window.open('https://www.gmail.com/', '_blank', 'noopener,noreferrer')}>TRY IT FOR FREE</button>
      </section>

      <section className="other-words">
        <h2>Other Words!</h2>
        <ul lang={targetLanguage} dir={isRtl ? 'rtl' : 'ltr'}>
          {otherWords.map((word, index) => (
            <li key={`${word}-${index}`}>{word}</li>
          ))}
        </ul>
      </section>
    </aside>
  )
}