import { useLanguage } from "../../contexts/LanguageContext";
import "./Hero.css";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-image-placeholder">
            <div className="module-sign">
              <div className="module-sign-content">
                <span className="module-text">MODULO 40</span>
                <div className="module-logo">DRS</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-content">
            <h1 className="hero-title">{t("hero.title")}</h1>
            <p className="hero-description">{t("hero.description")}</p>
            <button className="hero-cta">
              {t("hero.cta")}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
