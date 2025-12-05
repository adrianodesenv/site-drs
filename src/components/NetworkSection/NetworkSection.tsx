import { useLanguage } from "../../contexts/LanguageContext";
import "./NetworkSection.css";

const NetworkSection = () => {
  const { t } = useLanguage();

  return (
    <section className="network-section">
      <div className="container">
        <h2 className="network-title">{t("network.title")}</h2>
        <div className="network-map">
          <div className="map-placeholder">
            <div className="map-pin pin-1"></div>
            <div className="map-pin pin-2"></div>
            <div className="map-pin pin-3"></div>
            <div className="map-pin pin-4"></div>
            <div className="map-pin pin-5"></div>
            <div className="map-pin pin-6"></div>
            <div className="map-pin pin-7"></div>
            <div className="map-pin pin-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
