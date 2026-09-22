import './Sidebar.css'
// import AppStoreBadges from '../../assets/app-store-badges.png'
import AppleStore from '../../assets/apple-store.png'
import AndroidStore from '../../assets/android-store.png'
import MailAd from '../../assets/mail-ad.png'
const otherWords = [
  'Welcoming',
  'Well',
  'Wellness',
  'Welcomes',
  'Welcomed',
  'Welcome mat',
  'Welcoming',
  'Well',
  'Wellness',
  'Welcomes',
  'Welcomed',
  'Welcome mat',
]
export const Sidebar = () => {
  return (
    <aside className="sidebar" aria-label="Related content">
      <section className="download-card">
        <h2>Download Our Mobile App!</h2>
        <div className='AppStoreBadges'>
          <img
          src={AndroidStore}
          alt="Get it on Google Play and download on the App Store"
        />
        <img
          src={AppleStore}
          alt="Get it on Google Play and download on the App Store"
        />
        </div>
      </section>

      <section className="email-ad">
        <img src={MailAd} alt="Mail app notification" />
        <p>Want to automate your emails?</p>
        <button type="button">TRY IT FOR FREE</button>
      </section>

      <section className="other-words">
        <h2>Other Words!</h2>
        <ul>
          {otherWords.map((word, index) => (
            <li key={`${word}-${index}`}>{word}</li>
          ))}
        </ul>
      </section>
    </aside>
  )
}