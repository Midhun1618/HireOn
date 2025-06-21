import { useState, useEffect } from "react";
import img from './components/img.png'
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Onboard.css";

export default function Onboard() {
  const [step, setStep] = useState(0);
    const navigate = useNavigate();
  const [selectedMainRole, setSelectedMainRole] = useState("");
  const [selectedSpecificRole, setSelectedSpecificRole] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [showAnimation, setShowAnimation] = useState(true);

  const token = localStorage.getItem("token");
  let userId = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      userId = decoded.id;
    } catch (e) {
      console.error("Failed to decode token", e);
    }
  }

  useEffect(() => {
    setShowAnimation(true);
  }, [step]);

  const handleCardClick = (value) => {
    if (step === 0) {
      setSelectedMainRole(value);
    } else if (step === 1) {
      setSelectedSpecificRole(value);
    } else if (step === 2) {
      setSelectedServices((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

const handleNext = async () => {
  if (step < 2) {
    setShowAnimation(false);
    setTimeout(() => {
      setStep(step + 1);
      setShowAnimation(true);
    }, 400);
  } else {
    const onboardingData = {
      userType: selectedMainRole,
      role: selectedSpecificRole,
      services: selectedServices,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/onboarding/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(onboardingData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("User onboarding data updated:", data);

          localStorage.setItem("token", data.token);
  navigate("/dashboard");
      } else {
        console.error("Failed to update onboarding info:", data);
      }
    } catch (error) {
      console.error("Error updating onboarding:", error);
    }
  }
};

  const isNextEnabled =
    (step === 0 && selectedMainRole) ||
    (step === 1 && selectedSpecificRole) ||
    (step === 2 && selectedServices.length > 0);

  const stepsData = [
    {
      title: "Who are you?",
      subtitle: "Choose your type",
      options: [
        { id: "freelancer", name: "Freelancer", icon: "🧑‍💻" },
        { id: "seller", name: "Seller", icon: "🛍️" },
      ],
    },
    {
      title: "What is your role?",
      subtitle: "Select the role you relate to most",
      options: [
        { id: "web-developer", name: "Web Developer", icon: "🌐" },
        { id: "designer", name: "Designer", icon: "🎨" },
        { id: "graphic-artist", name: "Graphic Artist", icon: "🖼️" },
        { id: "coder", name: "Coder", icon: "💻" },
        { id: "programmer", name: "Programmer", icon: "🧠" },
        { id: "data-scientist", name: "Data Scientist", icon: "📊" },
        { id: "project-manager", name: "Project Manager", icon: "📅" },
        { id: "content-writer", name: "Content Writer", icon: "✍️" },
        { id: "digital-marketer", name: "Digital Marketer", icon: "📢" },
        { id: "seo-specialist", name: "SEO Specialist", icon: "🔍" },
      ],
    },
    {
      title: "What services do you provide?",
      subtitle: "Choose one or more services",
      options:
        selectedSpecificRole === "web-developer"
          ? [
              { id: "frontend", name: "Frontend Dev", icon: "🖥️" },
              { id: "backend", name: "Backend Dev", icon: "🗄️" },
              { id: "fullstack", name: "Full Stack", icon: "🔀" },
              { id: "devops", name: "DevOps", icon: "⚙️" },
              { id: "mobile-dev", name: "Mobile Dev", icon: "📱" },
            ]
          : selectedSpecificRole === "designer"
          ? [
              { id: "uiux", name: "UI/UX", icon: "📱" },
              { id: "brand", name: "Brand Design", icon: "🏷️" },
              { id: "motion", name: "Motion Graphics", icon: "🎞️" },
              { id: "illustration", name: "Illustration", icon: "🖌️" },
              { id: "package-design", name: "Package Design", icon: "📦" },
            ]
          : selectedSpecificRole === "graphic-artist"
          ? [
              { id: "illustration", name: "Illustration", icon: "🖌️" },
              { id: "poster", name: "Poster Design", icon: "📃" },
              { id: "vector", name: "Vector Art", icon: "✒️" },
              { id: "photo-editing", name: "Photo Editing", icon: "🖼️" },
              { id: "logo-design", name: "Logo Design", icon: "🔰" },
            ]
          : selectedSpecificRole === "data-scientist"
          ? [
              { id: "data-analysis", name: "Data Analysis", icon: "📈" },
              { id: "machine-learning", name: "Machine Learning", icon: "🤖" },
              { id: "data-visualization", name: "Data Visualization", icon: "📊" },
            ]
          : selectedSpecificRole === "project-manager"
          ? [
              { id: "scrum-master", name: "Scrum Master", icon: "🏈" },
              { id: "resource-planning", name: "Resource Planning", icon: "📋" },
              { id: "risk-management", name: "Risk Management", icon: "⚠️" },
            ]
          : selectedSpecificRole === "content-writer"
          ? [
              { id: "blog-writing", name: "Blog Writing", icon: "📝" },
              { id: "copywriting", name: "Copywriting", icon: "✒️" },
              { id: "technical-writing", name: "Technical Writing", icon: "📚" },
            ]
          : selectedSpecificRole === "digital-marketer"
          ? [
              { id: "social-media", name: "Social Media Marketing", icon: "📱" },
              { id: "email-marketing", name: "Email Marketing", icon: "📧" },
              { id: "content-strategy", name: "Content Strategy", icon: "📅" },
            ]
          : selectedSpecificRole === "seo-specialist"
          ? [
              { id: "on-page-seo", name: "On-Page SEO", icon: "🔍" },
              { id: "off-page-seo", name: "Off-Page SEO", icon: "🌐" },
              { id: "seo-audit", name: "SEO Audit", icon: "📋" },
            ]
          : [
              { id: "consulting", name: "Tech Consulting", icon: "💼" },
              { id: "scripting", name: "Script Writing", icon: "📜" },
              { id: "testing", name: "Software Testing", icon: "🧪" },
            ],
    },
  ];

  const currentStep = stepsData[step];
  const useFlexLayout = currentStep.options.length <= 4;

  const isSelected = (id) =>
    (step === 0 && selectedMainRole === id) ||
    (step === 1 && selectedSpecificRole === id) ||
    (step === 2 && selectedServices.includes(id));

  const cardSizes = { 0: 300, 1: 210, 2: 210 };

  return (
    <div className="container">
    <div className="image-section">
  <img src={img} alt="Wave Illustration" className="center-image" />
</div>


      {currentStep && (
        <div className={`content-section ${showAnimation ? "" : "fade-out"}`}>
          <div className="title">
            <h1>{currentStep.title}</h1>
            <p>{currentStep.subtitle}</p>
          </div>

          <div
            className={`interests-grid ${step === 0 ? "center-grid" : ""} ${useFlexLayout ? "flex-center-grid" : ""} ${step === 1 ? "step-1" : ""}`}
          >
            {currentStep.options.map((item, index) => (
              <div
                key={item.id}
                className={`interest-card ${showAnimation ? "show" : "animate"} ${isSelected(item.id) ? "selected" : ""}`}
                style={{
                  width: `${cardSizes[step]}px`,
                  height: `${cardSizes[step]}px`,
                  transitionDelay: showAnimation ? `${index * 50}ms` : "0ms",
                }}
                onClick={() => handleCardClick(item.id)}
              >
                <span className="interest-icon">{item.icon}</span>
                <div className="interest-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        className={`next-button ${isNextEnabled ? "show" : ""}`}
        onClick={handleNext}
        disabled={!isNextEnabled}
      >
        {step === 2 ? "Submit" : "Next →"}
      </button>
    </div>
  );
}
