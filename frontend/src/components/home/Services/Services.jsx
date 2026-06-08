import { motion } from "framer-motion";
import { FaCode, FaGlobe, FaMobileAlt, FaCogs, FaRobot } from "react-icons/fa";
import heroTeam from "../../../assets/images/hero/hero-team.jpg";
import "./Services.css";

const services = [
  {
    icon: <FaCode />,
    title: "Software Development",
    description:
      "Custom business software tailored to your unique processes and goals.",
  },
  {
    icon: <FaGlobe />,
    title: "Website Development",
    description:
      "Modern, responsive, and SEO-friendly websites built for growth.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Application Development",
    description:
      "Scalable Android, iOS, and cross-platform mobile applications.",
  },
  {
    icon: <FaCogs />,
    title: "Software Services",
    description:
      "Maintenance, optimization, consulting, and technical support.",
  },
  {
    icon: <FaRobot />,
    title: "AI Automations",
    description:
      "AI-powered workflows, chatbots, and business automation systems.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag">OUR SERVICES</span>

          <h2 className="section-title mt-3">
            Technology Solutions Designed For Growth
          </h2>

          <p className="section-subtitle">
            From startups to enterprises, we build software solutions that solve
            real business challenges.
          </p>
        </div>

        <motion.div
  className="services-banner"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  <img src={heroTeam} alt="Software Team Collaboration" />
</motion.div>

        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div
                className="service-card"
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
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
              >
                <div className="service-icon">{service.icon}</div>

                <h4>{service.title}</h4>

                <p>{service.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
