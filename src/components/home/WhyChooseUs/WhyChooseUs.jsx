import { motion } from "framer-motion";
import {
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaBrain,
  FaCloud,
  FaHeadset,
} from "react-icons/fa";

import "./WhyChooseUs.css";

const features = [
  {
    icon: <FaRocket />,
    title: "Product First Approach",
    description:
      "We don't just write code. We build scalable products that create business value.",
  },
  {
    icon: <FaCode />,
    title: "Modern Technology Stack",
    description:
      "React, Node.js, MongoDB, AWS, and modern development practices.",
  },
  {
    icon: <FaBrain />,
    title: "AI Powered Solutions",
    description:
      "Automate workflows and improve efficiency using AI technologies.",
  },
  {
    icon: <FaCloud />,
    title: "Scalable Architecture",
    description:
      "Built to grow with your business from startup to enterprise scale.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Reliable",
    description:
      "Focus on security, performance, and long-term maintainability.",
  },
  {
    icon: <FaHeadset />,
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
            <div
              className="col-lg-4 col-md-6"
              key={index}
            >
              <motion.div
                className="why-card"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
              >
                <div className="why-icon">
                  {feature.icon}
                </div>

                <h4>{feature.title}</h4>

                <p>{feature.description}</p>

              </motion.div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;