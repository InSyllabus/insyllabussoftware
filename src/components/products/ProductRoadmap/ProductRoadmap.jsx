import "./ProductRoadmap.css";

const ProductRoadmap = () => {
  return (
    <section>

      <div className="container">

        <div className="text-center mb-5">
          <h2>Product Roadmap</h2>
        </div>

        <div className="roadmap">

          <div className="roadmap-item">
            <h4>2024</h4>
            <p>InSyllabus</p>
          </div>

          <div className="roadmap-item">
            <h4>2025</h4>
            <p>RidoTag</p>
          </div>

          <div className="roadmap-item">
            <h4>2026</h4>
            <p>AI Automation Suite</p>
          </div>

          <div className="roadmap-item">
            <h4>2027</h4>
            <p>Business Platform</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductRoadmap;