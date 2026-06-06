import {
  FaRocket,
  FaExpandArrowsAlt,
  FaShieldAlt,
  FaHeart,
} from "react-icons/fa";

import "./WhyProducts.css";

const features = [
  {
    icon: <FaRocket />,
    title: "Innovation",
    description:
      "Built with modern technologies to solve real-world challenges.",
  },
  {
    icon: <FaExpandArrowsAlt />,
    title: "Scalability",
    description: "Designed to grow with users, businesses, and future demands.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security",
    description: "Strong focus on privacy, reliability, and data protection.",
  },
  {
    icon: <FaHeart />,
    title: "User Experience",
    description: "Simple, intuitive, and engaging experiences for every user.",
  },
];

const WhyProducts = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Why Our Products</h2>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="why-product-card">
                <div className="why-product-icon">{feature.icon}</div>

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
