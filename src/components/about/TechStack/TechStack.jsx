import "./TechStack.css";

import { FaReact, FaNodeJs, FaAws, FaNetworkWired } from "react-icons/fa";

import {
  SiMongodb,
  SiBootstrap,
  SiJavascript,
  SiFramer,
  SiReact,
} from "react-icons/si";

const techs = [
  {
    icon: <FaReact />,
    name: "React",
  },

  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    icon: <FaAws />,
    name: "AWS",
  },
  {
    icon: <SiReact />,
    name: "React Native",
  },
  {
    icon: <SiBootstrap />,
    name: "Bootstrap",
  },
  {
    icon: <SiFramer />,
    name: "Framer Motion",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
  },
  {
    icon: <FaNetworkWired />,
    name: "REST APIs",
  },
];

const TechStack = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Technology Expertise</h2>

          <p className="section-subtitle">
            Modern technologies we use to build scalable, secure, and
            high-performance software solutions.
          </p>
        </div>

        <div className="row g-3">
          {techs.map((tech, index) => (
            <div className="col-lg-4 col-md-4 col-6" key={index}>
              <div className="tech-card">
                <div className="tech-icon">{tech.icon}</div>

                <h6>{tech.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
