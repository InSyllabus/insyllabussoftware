import {
  FaRobot,
  FaCloud,
  FaRocket,
} from "react-icons/fa";

import "./FutureVision.css";

const FutureVision = () => {
  return (
    <section className="future-section">

      <div className="container">

        <div className="text-center mb-5">

          <h2>Looking Ahead</h2>

          <p>
            We are continuously investing in
            innovative technologies and future-ready
            digital products.
          </p>

        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="future-card">
              <FaRobot />
              <h5>AI Solutions</h5>
            </div>
          </div>

          <div className="col-md-4">
            <div className="future-card">
              <FaCloud />
              <h5>Cloud Platforms</h5>
            </div>
          </div>

          <div className="col-md-4">
            <div className="future-card">
              <FaRocket />
              <h5>SaaS Products</h5>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default FutureVision;