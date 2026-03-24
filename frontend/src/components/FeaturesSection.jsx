import FeaturesMedia from "./FeaturesMedia";
import FeaturesContent from "./FeaturesContent";
import "./FeaturesSection.css";

const FeaturesSection = () => {
    return (
        <div className="features-section-wrapper">
            <FeaturesMedia />
            <FeaturesContent />
        </div>
    )
};

export default FeaturesSection;
