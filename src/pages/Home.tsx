import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ResultsSection from "../components/ResultsSection/ResultsSection";
import DRS360Section from "../components/DRS360Section/DRS360Section";
import SolutionsSection from "../components/SolutionsSection/SolutionsSection";
import PlanningSection from "../components/PlanningSection/PlanningSection";
import NetworkSection from "../components/NetworkSection/NetworkSection";
import InsightsSection from "../components/InsightsSection/InsightsSection";
import Footer from "../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <ResultsSection />
      <DRS360Section />
      <SolutionsSection />
      <PlanningSection />
      <NetworkSection />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default Home;
