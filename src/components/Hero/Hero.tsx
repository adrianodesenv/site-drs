import { useLanguage } from "../../contexts/LanguageContext";
import "./Hero.css";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-video-container">
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              poster=""
            >
              <source src="/video/WhatsApp Video 2025-11-14 at 14.25.47.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
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
                  stroke="currentColor"
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
