import { FaCode, FaGlobe, FaMobileAlt, FaRobot, FaCogs } from "react-icons/fa";

import "./ServicesGrid.css";

const services = [
  {
    icon: <FaCode />,
    title: "Software Development",
    desc: "Custom business software, ERP, CRM, portals and enterprise solutions.",
  },
  {
    icon: <FaGlobe />,
    title: "Website Development",
    desc: "Corporate websites, portals and modern web platforms.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Application Development",
    desc: "Android, iOS and cross-platform mobile applications.",
  },
  {
    icon: <FaRobot />,
    title: "AI Automations",
    desc: "Chatbots, workflows and AI-powered business automation.",
  },
  {
    icon: <FaCogs />,
    title: "Software Services",
    desc: "Maintenance, optimization, upgrades and technical consulting.",
  },
];

const ServicesGrid = () => {
  return (
    <section>
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-page-card">
                <div className="service-page-icon">{service.icon}</div>

                <h4>{service.title}</h4>

                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
