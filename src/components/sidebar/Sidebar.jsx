import './Sidebar.css'

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
        <img
          src="src/assets/app-store-badges.png"
          alt="Get it on Google Play and download on the App Store"
        />
      </section>

      <section className="email-ad">
        <img src="src/assets/mail-ad.png" alt="Mail app notification" />
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