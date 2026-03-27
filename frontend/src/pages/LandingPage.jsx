import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import "./LandingPage.css";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
    </div>
  )
};

export default LandingPage;
