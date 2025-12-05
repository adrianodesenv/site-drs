import { useLanguage } from "../../contexts/LanguageContext";
import "./SolutionsSection.css";

const SolutionsSection = () => {
  const { t } = useLanguage();

  const services = [
    { key: "clinical", label: t("solutions.clinical") },
    { key: "patient", label: t("solutions.patient") },
    { key: "thermo", label: t("solutions.thermo") },
  ];

  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-left">
          <div className="solutions-content">
            <h2 className="solutions-title">{t("solutions.title")}</h2>
            <p className="solutions-description">
              {t("solutions.description")}
            </p>
            <button className="solutions-cta">
              {t("solutions.cta")}
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
        <div className="solutions-right">
          <div className="services-list">
            {services.map((service) => (
              <button key={service.key} className="service-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 4V16M4 10H16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>{service.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
