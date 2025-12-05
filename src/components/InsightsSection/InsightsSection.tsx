import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useLanguage } from "../../contexts/LanguageContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./InsightsSection.css";

const InsightsSection = () => {
  const { t } = useLanguage();

  const insights = [
    {
      id: 1,
      title:
        "Sai Patria, entra Vinci: após rearranjo societário, DRS avança exterior",
      image: "🧪",
    },
    {
      id: 2,
      title:
        "DRS implementa nova tecnologia de rastreabilidade em operações globais",
      image: "📦",
    },
    {
      id: 3,
      title: "Expansão da rede DRS360 para novos mercados internacionais",
      image: "🌍",
    },
  ];

  return (
    <section className="insights-section">
      <div className="container">
        <h2 className="insights-title">{t("insights.title")}</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {insights.map((insight) => (
            <SwiperSlide key={insight.id}>
              <div className="insight-card">
                <div className="insight-image">{insight.image}</div>
                <div className="insight-content">
                  <h3 className="insight-title">{insight.title}</h3>
                  <button className="insight-btn">
                    {t("insights.readMore")}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InsightsSection;
