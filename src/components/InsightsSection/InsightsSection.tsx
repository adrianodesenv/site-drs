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
        "Sai Pátria, entra Vinci: após rearranjo societário, DRS avança no exterior",
      image: "/artigo2.png",
    },
    {
      id: 2,
      title:
        "DRS implementa nova tecnologia de rastreabilidade em operações globais",
      image: "/mask-group-insights.png",
    },
    {
      id: 3,
      title: "Expansão da rede DRS360 para novos mercados internacionais",
      image: "/artigo2.png",
    },
  ];

  return (
    <section className="insights-section">
      <div className="insights-title-wrapper">
        <div className="insights-vector-bg">
          <img src="/insights-vector.svg" alt="" aria-hidden="true" />
          <h2 className="insights-title">{t("insights.title")}</h2>
        </div>
      </div>
      <div className="container insights-carousel-wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
        >
          {insights.map((insight) => (
            <SwiperSlide key={insight.id}>
              <div className="insight-card">
                <div className="insight-image">
                  <img src={insight.image} alt={insight.title} />
                </div>
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
        <div className="insights-navigation">
          <button className="swiper-button-prev-custom">
            <img src="/arrow-icon.svg" alt="Previous" />
          </button>
          <div className="swiper-pagination-custom"></div>
          <button className="swiper-button-next-custom">
            <img src="/arrow-icon.svg" alt="Next" className="arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
