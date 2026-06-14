
import React from "react";
import "./WhyChooseService.css";
import modernTechnologiesImg from "../../../assets/images/why choose us/modern_technologies.png";
import scalableSolutionsImg from "../../../assets/images/why choose us/scalable_architecture.png";
import agileDevelopmentImg from "../../../assets/images/why choose us/agile_development.png";
import longTermSupportImg from "../../../assets/images/why choose us/long_term_support.png";

const reasons = [
  {
    image: modernTechnologiesImg,
    title: "Modern Technologies",
    desc: "Built with the latest frameworks and industry best practices.",
  },
  {
    image: scalableSolutionsImg,
    title: "Scalable Solutions",
    desc: "Software designed to grow with your business.",
  },
  {
    image: agileDevelopmentImg,
    title: "Agile Development",
    desc: "Fast delivery cycles and continuous improvements.",
  },
  {
    image: longTermSupportImg,
    title: "Long-Term Support",
    desc: "Reliable maintenance and technical assistance.",
  },
];


const WhyChooseService = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Why Choose InSyllabus Softwares</h2>
        </div>

        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="choose-card">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="choose-image"
                />

                <h5>{reason.title}</h5>

                <p>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseService;
