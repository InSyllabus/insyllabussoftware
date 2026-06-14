import { FaLightbulb, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";
import "./CoreValues.css";
import innovationImg from "../../../assets/images/core values/innovation.png";
import customerSuccessImg from "../../../assets/images/core values/customer_success.png";
import integrityImg from "../../../assets/images/core values/integrity.png";
import excellenceImg from "../../../assets/images/core values/excellence.png";

const values = [
  {
    image: innovationImg,
    title: "Innovation",
    description:
      "We embrace creativity and emerging technologies to build solutions that solve real-world business challenges.",
  },
  {
    image: customerSuccessImg,
    title: "Customer Success",
    description:
      "Our clients' growth is our priority. We focus on delivering value, measurable results, and long-term partnerships.",
  },
  {
    image: integrityImg,
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and accountability in every project and business relationship.",
  },
  {
    image: excellenceImg,
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

        <div className="row g-4 justify-content-center">
          {values.map((value, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="value-card">
                <img
                  src={value.image}
                  alt={value.title}
                  className="value-image"
                />

                <h4>{value.title}</h4>

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
