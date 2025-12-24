import { useLanguage } from "../../contexts/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="footer-mask" clipPathUnits="objectBoundingBox">
            <path d="M0.161 0.075 L0.161 0.035 C0.161 0.016 0.149 0 0.134 0 L0.029 0 C0.013 0 0 0.017 0 0.039 L0 0.851 C0 0.871 0.012 0.887 0.027 0.887 L0.046 0.887 C0.06 0.887 0.072 0.902 0.072 0.921 L0.072 0.964 C0.072 0.983 0.084 0.999 0.098 0.999 L0.97 0.999 C0.987 0.999 1 0.982 1 0.96 L1 0.147 C1 0.126 0.987 0.11 0.971 0.11 L0.312 0.11 L0.187 0.11 C0.172 0.11 0.161 0.094 0.161 0.075 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="footer-content-wrapper">
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
              <div className="footer-column">
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
              </div>
              <div className="footer-column">
                <h3 className="footer-column-title">{t("footer.contact")}</h3>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <p>E-mail: contato@drsgroup.com.br</p>
                    <p>Comercial: +55 (11) 3198-9000</p>
                    <p>SAC / Programa de suporte: +55 (11) 3198-9005</p>
                    <p>
                      Trabalhe Conosco: <a href="#work">Clique aqui</a>
                    </p>
                  </div>
                </div>
                <h3 className="footer-column-title">{t("footer.addresses")}</h3>
                <div className="footer-addresses">
                  <div className="footer-address">
                    <strong>LATAM</strong>
                    <p>Centro Logístico - São Paulo (SP)</p>
                    <p>Rod. Anhanguera, s/nº - Km 15 - Warehouses 09-40</p>
                    <p>Vila Jaguara - São Paulo/SP - CEP: 05110-080</p>
                  </div>
                  <div className="footer-address">
                    <strong>EUROPA</strong>
                    <p>DRS International - Dublin (IE)</p>
                    <p>Dublin - 15-17 Earlsfort Terrace, Saint Kevin's,</p>
                    <p>Dublin 2, D02 YX28, Irlanda</p>
                  </div>
                </div>
              </div>
              <div className="footer-column">
                <h3 className="footer-column-title">Comunidade</h3>
                <ul className="footer-community">
                  <li>Shield Company</li>
                  <li>YouVita</li>
                </ul>
                <div className="footer-social-section">
                  <h3 className="footer-column-title">
                    Siga a DRS Group nas redes sociais
                  </h3>
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
              <p>© 2025 DRS Group - {t("footer.rights")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
