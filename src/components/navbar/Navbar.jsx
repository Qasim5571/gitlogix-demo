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

        <button className="mobile-menu" type="button" aria-label="Open navigation">
          <i className="fa-solid fa-bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}