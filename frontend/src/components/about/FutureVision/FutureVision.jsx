import {
  FaRobot,
  FaCloud,
  FaRocket,
} from "react-icons/fa";

import "./FutureVision.css";
import aiSolutionsImg from "../../../assets/images/Future vision/ai_solutions_sep.png";
import cloudPlatformsImg from "../../../assets/images/Future vision/cloud_platforms_sep.png";
import saasProductsImg from "../../../assets/images/Future vision/saas_products_sep.png";

const futureItems = [
  {
    image: aiSolutionsImg,
    title: "AI Solutions",
  },
  {
    image: cloudPlatformsImg,
    title: "Cloud Platforms",
  },
  {
    image: saasProductsImg,
    title: "SaaS Products",
  },
];

const FutureVision = () => {
  return (
    <section className="future-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Looking Ahead</h2>

          <p>
            We are continuously investing in innovative technologies and
            future-ready digital products.
          </p>
        </div>

        <div className="row g-4">
          {futureItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="future-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="future-image"
                />

                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default FutureVision;