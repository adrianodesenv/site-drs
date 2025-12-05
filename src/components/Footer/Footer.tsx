import { useLanguage } from "../../contexts/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-cta-section">
            <h2 className="footer-title">{t("footer.title")}</h2>
            <button className="footer-cta-btn">
              {t("footer.cta")}
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
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column footer-column-left">
              <h3 className="footer-column-title">DRS Group</h3>
              <ul className="footer-services">
                <li>{t("solutions.clinical")}</li>
                <li>{t("solutions.patient")}</li>
                <li>{t("solutions.thermo")}</li>
              </ul>
              <div className="footer-logo">
                <div className="footer-logo-blocks">
                  <div className="footer-logo-block block-1"></div>
                  <div className="footer-logo-block block-2"></div>
                  <div className="footer-logo-block block-3"></div>
                  <div className="footer-logo-block block-4"></div>
                </div>
                <div className="footer-logo-text">
                  <span className="footer-logo-group">group</span>
                  <span className="footer-logo-drs">DRS</span>
                </div>
              </div>
              <ul className="footer-links">
                <li>
                  <a href="#privacy">{t("footer.privacy")}</a>
                </li>
                <li>
                  <a href="#terms">{t("footer.terms")}</a>
                </li>
                <li>
                  <a href="#cookies">{t("footer.cookies")}</a>
                </li>
              </ul>
            </div>
            <div className="footer-column footer-column-right">
              <h3 className="footer-column-title">{t("footer.addresses")}</h3>
              <div className="footer-addresses">
                <div className="footer-address">
                  <strong>Sede Administrativa - São Paulo (SP)</strong>
                  <p>Rua Exemplo, 123 - São Paulo, SP - CEP 01234-567</p>
                </div>
                <div className="footer-address">
                  <strong>Centro Logístico - São Paulo (SP)</strong>
                  <p>Av. Exemplo, 456 - São Paulo, SP - CEP 01234-567</p>
                </div>
                <div className="footer-address">
                  <strong>Sede Europa (PT)</strong>
                  <p>Rua Exemplo, 789 - Lisboa, Portugal</p>
                </div>
                <div className="footer-address">
                  <strong>Sede Internacional (US)</strong>
                  <p>123 Example St - New York, NY 10001</p>
                </div>
              </div>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <strong>{t("footer.contact")}</strong>
                  <p>contato@drsgroup.com</p>
                  <p>+55 11 1234-5678</p>
                </div>
                <div className="footer-contact-item">
                  <a href="#integrity">{t("footer.integrity")}</a>
                </div>
                <div className="footer-contact-item">
                  <a href="#work">{t("footer.work")}</a>
                </div>
                <div className="footer-social">
                  <a href="#linkedin" aria-label="LinkedIn">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11V16M8 8V8.01M12 16V11M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© 2023 DRS Group. {t("footer.rights")}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
