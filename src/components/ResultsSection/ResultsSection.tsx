import { useLanguage } from "../../contexts/LanguageContext";
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
              <h3 className="result-title">{result.title}</h3>
              <p className="result-description">{result.description}</p>
            </div>
          ))}
        </div>
        <div className="decorative-elements">
          <div className="decor-square square-teal"></div>
          <div className="decor-square square-orange"></div>
          <div className="decor-square square-teal"></div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
