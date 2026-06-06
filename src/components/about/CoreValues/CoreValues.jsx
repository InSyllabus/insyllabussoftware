import { FaLightbulb, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";
import "./CoreValues.css";

const values = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "We embrace creativity and emerging technologies to build solutions that solve real-world business challenges.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Success",
    description:
      "Our clients' growth is our priority. We focus on delivering value, measurable results, and long-term partnerships.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and accountability in every project and business relationship.",
  },
  {
    icon: <FaRocket />,
    title: "Excellence",
    description:
      "We strive for the highest standards in design, development, performance, and user experience.",
  },
];

const CoreValues = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-5">
          <h2>Core Values</h2>
        </div>

        <div className="row g-4">
          {values.map((value, index) => (
            <div className="col-lg-3" key={index}>
              <div className="value-card">
                <div className="value-icon">{value.icon}</div>

                <h5>{value.title}</h5>

                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
