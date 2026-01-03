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
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1116 0.305374L19.6449 5.79172L19.6911 5.83465C19.8763 6.01824 19.984 6.26036 20 6.54643L19.9991 6.6426C19.9856 6.8692 19.899 7.08569 19.7284 7.27968L19.6638 7.34633L14.1116 12.8525C13.701 13.2597 13.0371 13.2597 12.6265 12.8525C12.2135 12.4429 12.2135 11.777 12.6265 11.3674L16.4601 7.56522L1.05235 7.56559C0.472139 7.56559 0 7.09741 0 6.51765C0 5.93789 0.472144 5.4697 1.05234 5.4697L16.3364 5.46932L12.6265 1.79052C12.2135 1.38092 12.2135 0.714975 12.6265 0.305374C13.0371 -0.101791 13.701 -0.101791 14.1116 0.305374Z"
                        fill="white"
                      />
                    </svg>
                    {t("insights.readMore")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="insight-navigation-container">
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
      </div>
    </section>
  );
};

export default InsightsSection;
