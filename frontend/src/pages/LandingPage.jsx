import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import "./LandingPage.css";
import FeaturesSection from "../components/FeaturesSection";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  )
};

export default LandingPage;
