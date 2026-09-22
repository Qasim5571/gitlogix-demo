import './Footer.css';
import Android from '../../assets/andriod.png'
import Apple from '../../assets/apple.png'
import { Logo } from "../../assets/Logo"

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <section className="footer-brand">
          <Logo className="footer-logo" />
          <p>© 2018 Copyright: Urduban</p>
          <p>All Right Reserved.</p>
          <div className='social-icons'>
            <i className="fa-brands fa-facebook-f social-icon" aria-hidden="true"></i>
            <i className="fa-brands fa-instagram social-icon" aria-hidden="true"></i>
            <i className="fa-brands fa-youtube social-icon" aria-hidden="true"></i>
            <i className="fa-brands fa-twitter social-icon" aria-hidden="true"></i>
          </div>
        </section>

        <nav className="footer-nav" aria-label="Footer navigation">
          {/* using href as routing is not a requirement */}
          <a href="#home">Home</a>
          <a href="#thesaurus">Thesaurus</a>
          <a href="#dictionary">Dictionary</a>
          <a href="#antonyms">Antonyms</a>
          <a href="#word-of-day">Word Of Day</a>
          <a href="#quiz">Quiz</a>
        </nav>

        <section className="footer-contact">
          <a href="#about-us">About us</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#contact-us">Contact us</a>
          <p>Download Our Mobile App:</p>
          <div className="platform-icons" aria-label="Android and Apple apps">
            <img className='android' src={Android} alt="Andriod" />
            <img className='apple' src={Apple} alt="Andriod" />

          </div>
        </section>

        <a className="back-to-top" href="#top" aria-label="Back to top">
          <i className="fa-solid fa-chevron-up" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}