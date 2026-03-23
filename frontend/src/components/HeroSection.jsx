import VantaBird from "./VantaBird";

const HeroSection = () => {
  return (
    <div className="lp-hero-section">
      <VantaBird />

      <div className="lp-hero-content">
        <h1 className="lp-hero-title">
          Your entire digital life, unified in one place.
        </h1>

        <h4 className="lp-hero-subtitle">
          LifeOS brings together your emails, tasks, files, meetings and AI
          assistant
        </h4>

        <button className="lp-hero-button">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
