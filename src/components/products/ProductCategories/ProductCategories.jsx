import { FaGraduationCap, FaShieldAlt, FaRobot } from "react-icons/fa";
import "./ProductCategories.css";

const ProductCategories = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Product Categories</h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="category-card">
              <div className="category-icon">
                <FaGraduationCap />
              </div>

              <h4>Education Technology</h4>

              <p>
                Digital learning platforms, skill development solutions, and educational ecosystems.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="category-card">
              <div className="category-icon">
                <FaShieldAlt />
              </div>

              <h4>Safety Solutions</h4>

              <p>
                Smart security products, emergency communication, and public safety systems.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="category-card">
              <div className="category-icon">
                <FaRobot />
              </div>

              <h4>AI Solutions</h4>

              <p>
                AI-powered automation, intelligent workflows, and future-ready platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
