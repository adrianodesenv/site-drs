import { useLanguage } from "../../contexts/LanguageContext";
import "./PlanningSection.css";

const PlanningSection = () => {
  const { t } = useLanguage();

  return (
    <section className="planning-section">
      <div className="container">
        <div className="planning-header">
          <span className="drs360-tag">DRS 360</span>
          <h2 className="planning-title">{t("planning.title")}</h2>
        </div>
        <div className="planning-grid">
          <div className="planning-left">
            <div className="planning-content-block">
              <div className="drs360-logo">
                <div className="logo-circle circle-1"></div>
                <div className="logo-circle circle-2"></div>
                <div className="logo-circle circle-3"></div>
                <div className="logo-text-center">
                  <span className="logo-drs">DRS</span>
                  <span className="logo-360">360</span>
                </div>
              </div>
              <div className="planning-actions">
                <button className="planning-cta">
                  {t("planning.cta")}
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
              <div className="planning-decorative-orange">
                <div className="decor-square square-orange"></div>
              </div>
            </div>
          </div>
          <div className="planning-right">
            <div className="planning-decorative-green">
              <div className="decor-square square-green"></div>
            </div>
            <div className="planning-image warehouse">
              <div className="image-placeholder warehouse">📦</div>
            </div>
            <div className="planning-smartphones">
              <div className="smartphone-mockup">📱</div>
              <div className="smartphone-mockup">📱</div>
              <div className="smartphone-mockup">📱</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanningSection;
