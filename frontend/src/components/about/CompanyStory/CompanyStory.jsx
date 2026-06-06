import "./CompanyStory.css";

const CompanyStory = () => {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2>Our Story</h2>

            <p>
              InSyllabus Softwares was founded with a vision to create
              technology solutions that solve real-world business challenges.
            </p>

            <p>
              We started by building products and evolved into a technology
              company helping organizations transform through software.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="story-card">
              <h3>Building Products. Solving Problems. Creating Impact.</h3>
            </div>
          </div>
        </div>

        <div className="row mt-5">

  <div className="col-4">
    <div className="stat-box">
      <h3>2+</h3>
      <p>Products</p>
    </div>
  </div>

  <div className="col-4">
    <div className="stat-box">
      <h3>5+</h3>
      <p>Services</p>
    </div>
  </div>

  <div className="col-4">
    <div className="stat-box">
      <h3>100%</h3>
      <p>Commitment</p>
    </div>
  </div>

</div>
      </div>
    </section>
  );
};

export default CompanyStory;
