import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Language } from "../../utils/i18n";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("solutions");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveMenu("solutions");
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo" onClick={handleLogoClick}>
          <img src="/logo.png" alt="group DRS" className="logo-image" />
        </a>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <a
            href="#solutions"
            className={activeMenu === "solutions" ? "active" : ""}
            onClick={() => {
              setActiveMenu("solutions");
              setIsMenuOpen(false);
            }}
          >
            {t("header.solutions")}
          </a>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a
              href="#expertise"
              className={activeMenu === "expertise" ? "active" : ""}
              onClick={() => {
                setActiveMenu("expertise");
                setIsMenuOpen(false);
              }}
            >
              {t("header.expertise")}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="chevron-icon"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {/* Conteúdo do dropdown pode ser adicionado aqui */}
              </div>
            )}
          </div>
          <a
            href="#group"
            className={activeMenu === "group" ? "active" : ""}
            onClick={() => {
              setActiveMenu("group");
              setIsMenuOpen(false);
            }}
          >
            {t("header.group")}
          </a>
          <a
            href="#insights"
            className={activeMenu === "insights" ? "active" : ""}
            onClick={() => {
              setActiveMenu("insights");
              setIsMenuOpen(false);
            }}
          >
            {t("header.insights")}
          </a>
        </nav>

        <div className="header-actions">
          <button className="action-btn portal-btn">
            <span>{t("header.portal")}</span>
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
          <button className="action-btn contact-btn">
            <span>{t("header.contact")}</span>
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
          <button
            className="lang-btn-single"
            onClick={() => {
              const nextLang =
                language === "pt" ? "en" : language === "en" ? "es" : "pt";
              handleLanguageChange(nextLang);
            }}
            aria-label="Change language"
          >
            {language.toUpperCase()}
          </button>

          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
