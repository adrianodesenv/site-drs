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
        <div className="results-grid">
          {results.map((result) => (
            <div key={result.key} className="result-card">
              <OrganicBorder
                width="100%"
                height="100%"
                stroke="#e0e0e0"
                fill="#f5f5f5"
                strokeWidth={1}
                style={{ position: "absolute", top: 0, left: 0 }}
              />
              <div className="result-content">
                <h3 className="result-title">{result.title}</h3>
                <p className="result-description">{result.description}</p>
              </div>
              <div className="result-decoratives">
                <div className="decor-square square-teal"></div>
                <div className="decor-square square-orange"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
