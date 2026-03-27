import StepCard from "./StepCard";
import steps from "./Steps";

const HowItWorksSection = () => {
  return (
    <div>
          <h2>
              How It Works
          </h2>

          <div className="Card">
              {steps.map((step) =>(
                  <StepCard key={step.number} step={step} /> 
              ))}
          </div>
    </div>
  )
}

export default HowItWorksSection;