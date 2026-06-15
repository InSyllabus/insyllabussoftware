import { useEffect, useState } from "react";
import { getJobs } from "../api/careerApi";
import { Link } from "react-router-dom";
import "../styles/careers.css";

export default function Careers() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const res = await getJobs();
      setJobs(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="career-hero">
        <div className="container">
          <h1>Join Our Team</h1>

          <p>
            Build innovative products, work with
            passionate people, and grow your career
            with us.
          </p>
        </div>
      </section>

      <section className="career-section">
        <div className="container">
          <div className="career-header">
            <h2>Open Positions</h2>

            <span>
              {jobs.length} Opportunities Available
            </span>
          </div>

         <div className="row g-4">
  {jobs.length > 0 ? (
    jobs.map((job) => (
      <div
        className="col-lg-4 col-md-6"
        key={job._id}
      >
        <div className="job-card">

          <div className="job-card-header">
            <h4>{job.title}</h4>

            <span className="job-badge">
              {job.employmentType}
            </span>
          </div>

          <div className="job-info">
            <p>
              <strong>📍 Location:</strong>{" "}
              {job.location}
            </p>

            <p>
              <strong>💼 Experience:</strong>{" "}
              {job.experience}
            </p>
          </div>

          <p className="job-description">
            {job.description.length > 120
              ? `${job.description.substring(
                  0,
                  120
                )}...`
              : job.description}
          </p>

          <Link
            to={`/career/${job._id}`}
            className="apply-btn"
          >
            Apply Now
          </Link>

        </div>
      </div>
    ))
  ) : (
    <div className="col-12 text-center">
      <h4>No Open Positions Available</h4>
    </div>
  )}
</div>
        </div>
      </section>
    </>
  );
}