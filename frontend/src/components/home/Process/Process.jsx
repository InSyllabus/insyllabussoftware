import { motion } from "framer-motion";

import {
  FaSearch,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

import "./Process.css";

const processSteps = [
  {
    icon: <FaSearch />,
    title: "Discovery",
    description:
      "Understanding your business goals, challenges, and requirements.",
  },
  {
    icon: <FaClipboardList />,
    title: "Planning",
    description:
      "Creating a roadmap, timeline, and technical strategy.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Design",
    description:
      "Crafting intuitive UI/UX experiences and wireframes.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    description:
      "Building scalable, secure, and high-performance solutions.",
  },
  {
    icon: <FaBug />,
    title: "Testing",
    description:
      "Ensuring quality, performance, and reliability.",
  },
  {
    icon: <FaRocket />,
    title: "Deployment",
    description:
      "Launching your solution with confidence.",
  },
  {
    icon: <FaHeadset />,
    title: "Support",
    description:
      "Continuous maintenance, monitoring, and improvements.",
  },
];

const Process = () => {
  return (
    <section className="process-section">

      <div className="container">

        <div className="text-center mb-5">

          <span className="section-tag">
            OUR PROCESS
          </span>

          <h2 className="section-title mt-3">
            From Idea To Deployment
          </h2>

          <p className="section-subtitle">
            A proven process that helps us deliver
            successful software solutions consistently.
          </p>

        </div>

        <div className="row g-4">

          {processSteps.map((step, index) => (
            <div
              className="col-lg col-md-6"
              key={index}
            >
              <motion.div
                className="process-card"
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
              >
                <div className="process-icon">
                  {step.icon}
                </div>

                <h5>{step.title}</h5>

                <p>{step.description}</p>

              </motion.div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Process;