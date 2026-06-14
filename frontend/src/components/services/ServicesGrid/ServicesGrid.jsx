import softwareDevelopmentImg from "../../../assets/images/services/softwaredevelopment.png";
import websiteDevelopmentImg from "../../../assets/images/services/websitedevelopment.png";
import applicationDevelopmentImg from "../../../assets/images/services/applicationdevelopment.png";
import softwareServicesImg from "../../../assets/images/services/softwareservices.png";
import aiAutomationsImg from "../../../assets/images/services/aiautomations.png";

import "./ServicesGrid.css";

const services = [
  {
    image: softwareDevelopmentImg,
    title: "Software Development",
    desc: "Custom business software, ERP, CRM, portals and enterprise solutions.",
  },
  {
    image: websiteDevelopmentImg,
    title: "Website Development",
    desc: "Corporate websites, portals and modern web platforms.",
  },
  {
    image: applicationDevelopmentImg,
    title: "Application Development",
    desc: "Android, iOS and cross-platform mobile applications.",
  },
  {
    image: aiAutomationsImg,
    title: "AI Automations",
    desc: "Chatbots, workflows and AI-powered business automation.",
  },
  {
    image: softwareServicesImg,
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
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-page-image"
                />

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