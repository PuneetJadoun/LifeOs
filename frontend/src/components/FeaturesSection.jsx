import FeaturesMedia from "./FeaturesMedia";
import FeaturesContent from "./FeaturesContent";
import "./FeaturesSection.css";

const FeaturesSection = () => {
    return (
        <div className="features-section-wrapper">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Features
            </h1>
            <FeaturesMedia />
            <FeaturesContent />
        </div>
    )
};

export default FeaturesSection;
