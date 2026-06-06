import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Products.css";

const Products = () => {
  return (
    <section className="products-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Products</h2>

          <p className="section-subtitle">
            Innovative solutions built to solve real-world problems.
          </p>
        </div>

        <div className="row g-4">
          {/* InSyllabus */}

          <div className="col-lg-6">
            <motion.div
              className="product-card"
              whileHover={{
                y: -10,
              }}
            >
              {/* <div className="product-icon">🎓</div> */}

              <h3>InSyllabus</h3>

              <p>
                Learning & Career Development Platform helping students and
                professionals upskill and grow.
              </p>

              <ul>
                <li>Online Learning</li>
                <li>Career Development</li>
                <li>Certification Programs</li>
              </ul>

              <a
                href="https://insyllabus.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit Product
              </a>
            </motion.div>
          </div>

          {/* RidoTag */}

          <div className="col-lg-6">
            <motion.div
              className="product-card"
              whileHover={{
                y: -10,
              }}
            >
              {/* <div className="product-icon">🚗</div> */}

              <h3>RidoTag</h3>

              <p>
                Smart QR-Based Safety Solution for vehicles and emergency
                identification.
              </p>

              <ul>
                <li>Vehicle Safety</li>
                <li>Emergency Contact Access</li>
                <li>Smart QR Technology</li>
              </ul>

              <a
                href="https://ridotag.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit Product
              </a>
            </motion.div>
          </div>
        </div>

        {/* <div className="text-center mt-5">
          <Link to="/products" className="btn btn-outline-dark">
            Explore All Products
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Products;
