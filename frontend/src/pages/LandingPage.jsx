import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
    </div>
  )
};

export default LandingPage;
