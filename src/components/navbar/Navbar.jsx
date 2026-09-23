import { useState } from 'react'
import './Navbar.css'

import { Logo } from "../../assets/Logo"

const navigation = [
  'Home',
  'Dictionary',
  'Thesaurus',
  'Synonyms',
  'Antonyms',
  'Quiz',
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo-link" href="#top" aria-label="Urduban home">
          <Logo />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <button
          className="mobile-menu"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <i
            className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}
            aria-hidden="true"
          />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        {navigation.map((item) => (
          <a
            href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
            key={item}
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}