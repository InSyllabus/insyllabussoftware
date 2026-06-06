import { FaReact, FaNodeJs, FaAws, FaNetworkWired } from "react-icons/fa";

import { SiMongodb, SiBootstrap, SiJavascript, SiReact } from "react-icons/si";

import "./TechnologyStack.css";

const techs = [
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <SiReact />,
    name: "React Native",
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
    icon: <SiBootstrap />,
    name: "Bootstrap",
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

const TechnologyStack = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Technology Stack</h2>
        </div>

        <div className="row g-3">
          {techs.map((tech, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6">
              <div className="tech-stack-card">
                <div className="tech-stack-icon">{tech.icon}</div>

                <h6>{tech.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
