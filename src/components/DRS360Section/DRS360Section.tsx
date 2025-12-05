import { useLanguage } from "../../contexts/LanguageContext";
import "./DRS360Section.css";

const DRS360Section = () => {
  const { t } = useLanguage();

  return (
    <section className="drs360-section">
      <div className="drs360-container">
        <div className="drs360-left">
          <div className="drs360-content">
            <h2 className="drs360-title">{t("drs360.title")}</h2>
            <p className="drs360-description">{t("drs360.description")}</p>
            <div className="drs360-navigation">
              <button
                className="nav-arrow nav-arrow-left"
                aria-label="Previous"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15L7 10L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="nav-arrow nav-arrow-right" aria-label="Next">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5L13 10L8 15"
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
        <div className="drs360-right">
          <div className="drs360-image-placeholder">
            <div className="person-icon">👤</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DRS360Section;
