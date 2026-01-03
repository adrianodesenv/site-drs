import { useLanguage } from "../../contexts/LanguageContext";
import "./NetworkSection.css";

const NetworkSection = () => {
  const { t } = useLanguage();

  return (
    <section className="network-section">
      <div className="container">
        <div className="network-title-banner">
          <h2 className="network-title">{t("network.title")}</h2>
        </div>
        <div className="network-map">
          <div className="map-container">
            <img src="/world-map.svg" alt="World Map" className="world-map" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
