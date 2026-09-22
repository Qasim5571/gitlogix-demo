import './Header.css';
import BannerAd from '../../assets/banner-ad.png'
export const Header = () => {
  return (
    <section className="hero-section" aria-label="Dictionary search">
      <div className="hero-tools">
        <div className="language-selector">
          <span>
            English <i className="fa-solid fa-chevron-down" aria-hidden="true" />
          </span>
          <i className="fa-solid fa-arrow-right language-arrow" aria-hidden="true" />
          <span>
            Urdu <i className="fa-solid fa-chevron-down" aria-hidden="true" />
          </span>
        </div>

        <div className="search-bar" role="search">
          <span className="search-copy">Welcome</span>
          <button type="button" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
          </button>
        </div>

        <img
          className="banner-ad"
          src={BannerAd}
          alt="Advertisement: zaroorat e rishta in Pakistan"
        />
      </div>
    </section>
  )
}