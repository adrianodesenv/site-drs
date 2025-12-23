import { useLanguage } from "../../contexts/LanguageContext";
import OrganicBorder from "../OrganicBorder/OrganicBorder";
import "./ResultsSection.css";

const ResultsSection = () => {
  const { t } = useLanguage();

  const results = [
    {
      key: "protocols",
      title: t("results.protocols"),
      description: t("results.protocols.desc"),
    },
    {
      key: "clients",
      title: t("results.clients"),
      description: t("results.clients.desc"),
    },
    {
      key: "patients",
      title: t("results.patients"),
      description: t("results.patients.desc"),
    },
  ];

  return (
    <section className="results-section">
      <div className="container">
        <h2 className="results-title">{t("results.title")}</h2>
        <h2 className="results-title2">{t("results.title2")}</h2>
        <div className="results-grid">
          {/* Card 1 - Top Left */}
          <div className="result-card card-1">
            <OrganicBorder
              width="100%"
              height="100%"
              stroke="#2d8659"
              fill="#ffffff"
              strokeWidth={1}
              style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div className="result-content">
              <h3 className="result-title">{results[0].title}</h3>
              <p className="result-description">{results[0].description}</p>
            </div>
            <div className="result-decoratives">
              <div className="decor-square square-teal"></div>
            </div>
          </div>

          {/* Card 2 - Middle Right, stepped down */}
          <div className="result-card card-2">
            <OrganicBorder
              width="100%"
              height="100%"
              stroke="#2d8659"
              fill="#ffffff"
              strokeWidth={1}
              style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div className="result-content">
              <h3 className="result-title">{results[1].title}</h3>
              <p className="result-description">{results[1].description}</p>
            </div>
            <div className="result-decoratives">
              <div className="decor-square square-teal"></div>
              <div className="decor-square square-orange"></div>
            </div>
          </div>

          {/* Card 3 - Further right, more stepped down */}
          <div className="result-card card-3">
            <OrganicBorder
              width="100%"
              height="100%"
              stroke="#2d8659"
              fill="#ffffff"
              strokeWidth={1}
              style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div className="result-content">
              <h3 className="result-title">{results[2].title}</h3>
              <p className="result-description">{results[2].description}</p>
            </div>
            <div className="result-decoratives">
              <div className="decor-square square-orange"></div>
            </div>
          </div>

          {/* DRS360 Card - Bottom Left, Large */}
          <div className="drs360-card">
            <div className="drs360-content">
              <h3 className="drs360-title">{t("drs360.title")}</h3>
              <p className="drs360-description">{t("drs360.description")}</p>
              <div className="drs360-navigation">
                <img
                  src="/carrossel.png"
                  alt="Carousel navigation"
                  className="carousel-image"
                />
              </div>
            </div>
            <div className="drs360-decoratives">
              <div className="decor-square square-teal"></div>
            </div>
            <div className="drs360-decorative-orange">
              <div className="decor-square square-orange"></div>
            </div>
          </div>

          {/* Smartphone Image - Bottom Right */}
          <div className="smartphone-card">
            <img
              src="/cel.png"
              alt="DRS360 Mobile App"
              className="smartphone-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
