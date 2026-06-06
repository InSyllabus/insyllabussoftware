import "./MissionVision.css";

const MissionVision = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="mission-card">
              <h3>Mission</h3>

              <p>
                To build innovative software products and custom solutions that
                help businesses grow.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="vision-card">
              <h3>Vision</h3>

              <p>
                To become a globally trusted technology company known for
                innovation and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
