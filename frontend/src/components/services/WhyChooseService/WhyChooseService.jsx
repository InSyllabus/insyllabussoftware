import {
  FaRocket,
  FaLayerGroup,
  FaCodeBranch,
  FaHeadset,
} from "react-icons/fa";

import "./WhyChooseService.css";

const reasons = [
  {
    icon: <FaRocket />,
    title: "Modern Technologies",
    desc: "Built with the latest frameworks and industry best practices.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Scalable Solutions",
    desc: "Software designed to grow with your business.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Agile Development",
    desc: "Fast delivery cycles and continuous improvements.",
  },
  {
    icon: <FaHeadset />,
    title: "Long-Term Support",
    desc: "Reliable maintenance and technical assistance.",
  },
];

const WhyChooseService = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Why Choose InSyllabus Softwares</h2>
        </div>

        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="choose-card">
                <div className="choose-icon">{reason.icon}</div>

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
