import { useLanguage } from "../../contexts/LanguageContext";
import "./PlanningSection.css";

const PlanningSection = () => {
  const { t } = useLanguage();

  return (
    <section className="planning-section">
      <div className="container">
        <h2 className="planning-title">{t("planning.title")}</h2>
        <div className="planning-center">
          <div className="drs360-logo">
            <div className="logo-circle circle-1"></div>
            <div className="logo-circle circle-2"></div>
            <div className="logo-circle circle-3"></div>
            <div className="logo-text-center">DRS 360</div>
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
        <div className="planning-images">
          <div className="planning-image">
            <div className="image-placeholder warehouse">📦</div>
          </div>
          <div className="planning-image">
            <div className="image-placeholder lab">🧪</div>
          </div>
          <div className="planning-image">
            <div className="image-placeholder data">💻</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanningSection;
