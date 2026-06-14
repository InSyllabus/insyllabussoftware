import {
  FaRocket,
  FaExpandArrowsAlt,
  FaShieldAlt,
  FaHeart,
} from "react-icons/fa";

import "./WhyProducts.css";
import innovationImg from "../../../assets/images/Product categories/innovation.png";
import scalabilityImg from "../../../assets/images/Product categories/scalability.png";
import securityImg from "../../../assets/images/Product categories/security.png";
import userExperienceImg from "../../../assets/images/Product categories/user_experience.png";

const features = [
  {
    image: innovationImg,
    title: "Innovation",
    description:
      "Built with modern technologies to solve real-world challenges.",
  },
  {
    image: scalabilityImg,
    title: "Scalability",
    description:
      "Designed to grow with users, businesses, and future demands.",
  },
  {
    image: securityImg,
    title: "Security",
    description:
      "Strong focus on privacy, reliability, and data protection.",
  },
  {
    image: userExperienceImg,
    title: "User Experience",
    description:
      "Simple, intuitive, and engaging experiences for every user.",
  },
];

const WhyProducts = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Why Our Products</h2>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="why-product-card">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="why-product-image"
                />

                <h4>{feature.title}</h4>

                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyProducts;
