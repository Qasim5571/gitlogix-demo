import { useState } from 'react'
import './Header.css';
import BannerAd from '../../assets/banner-ad.png'


const languages = [
  { label: 'English', value: 'en' },
  { label: 'Urdu', value: 'ur' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Spanish', value: 'es' },
]

export const Header = () => {

  const [sourceLanguage, setSourceLanguage] = useState('en')
  const [targetLanguage, setTargetLanguage] = useState('ur')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()

    const keyword = searchTerm.trim()

    if (!keyword) return

    localStorage.setItem('urdubanSearchKeyword', keyword)

    // Add your API request or navigation here later.
    console.log({
      keyword,
      sourceLanguage,
      targetLanguage,
    })
  }

  const handleTargetSelect = (e) => {
    setTargetLanguage(e);
    localStorage.setItem('urdubanTargetLanguage', e);
  }
  const handleSourceSelect = (e) => {
    setSourceLanguage(e);
    localStorage.setItem('urdubanSourceLanguage', e);
  }

  return (
    <section className="hero-section" aria-label="Dictionary search">
      <div className="hero-tools">
        <div className="language-selector">
          <div className="language-field">
            <select
              className="language-select"
              value={sourceLanguage}
              onChange={(event) => handleSourceSelect(event.target.value)}
              aria-label="Select source language"
            >
              {languages.map((language) => (
                <option key={language.value} value={language.value}>
                  {language.label}
                </option>
              ))}
            </select>

            <i className="fa-solid fa-chevron-down" aria-hidden="true" />
          </div>

          <i
            className="fa-solid fa-arrow-right language-arrow"
            aria-hidden="true"
          />

          <div className="language-field target-language">
            <select
              className="language-select"
              value={targetLanguage}
              onChange={(event) => handleTargetSelect(event.target.value)}
              aria-label="Select target language"
            >
              {languages.map((language) => (
                <option key={language.value} value={language.value}>
                  {language.label}
                </option>
              ))}
            </select>

            <i className="fa-solid fa-chevron-down" aria-hidden="true" />
          </div>
        </div>

        <form className="search-bar" role="search" onSubmit={handleSearch}>
          <input
            className="search-copy"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search a word"
            aria-label="Search word"
          />

          <button type="submit" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
          </button>
        </form>

        <img
          className="banner-ad"
          src={BannerAd}
          alt="Advertisement: zaroorat e rishta in Pakistan"
        />
      </div>
    </section>
  )
}