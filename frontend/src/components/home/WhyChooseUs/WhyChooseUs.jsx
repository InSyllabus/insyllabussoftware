import { motion } from "framer-motion";
import {
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaBrain,
  FaCloud,
  FaHeadset,
} from "react-icons/fa";
import productFirstImg from "../../../assets/images/why choose us/rocket_product_first_approach.png";
import modernTechImg from "../../../assets/images/why choose us/modern_technology_stack.png";
import aiPoweredImg from "../../../assets/images/why choose us/ai_powered_solutions.png";
import scalableArchitectureImg from "../../../assets/images/why choose us/scalable_architecture.png";
import secureReliableImg from "../../../assets/images/why choose us/secure_reliable.png";
import dedicatedSupportImg from "../../../assets/images/why choose us/dedicated_support.png";

import "./WhyChooseUs.css";

const features = [
  {
    image: productFirstImg,
    title: "Product First Approach",
    description:
      "We don't just write code. We build scalable products that create business value.",
  },
  {
    image: modernTechImg,
    title: "Modern Technology Stack",
    description:
      "React, Node.js, MongoDB, AWS, and modern development practices.",
  },
  {
    image: aiPoweredImg,
    title: "AI Powered Solutions",
    description:
      "Automate workflows and improve efficiency using AI technologies.",
  },
  {
    image: scalableArchitectureImg,
    title: "Scalable Architecture",
    description:
      "Built to grow with your business from startup to enterprise scale.",
  },
  {
    image: secureReliableImg,
    title: "Secure & Reliable",
    description:
      "Focus on security, performance, and long-term maintainability.",
  },
  {
    image: dedicatedSupportImg,
    title: "Dedicated Support",
    description:
      "Continuous support, improvements, and technical guidance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">

      <div className="container">

        <div className="text-center mb-5">

          <span className="section-tag">
            WHY CHOOSE US
          </span>

          <h2 className="section-title mt-3">
            Building Technology
            That Moves Businesses Forward
          </h2>

          <p className="section-subtitle">
            We combine innovation, technical expertise,
            and business understanding to deliver
            impactful digital solutions.
          </p>

        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="feature-card">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                />

                <h4>{feature.title}</h4>

                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;