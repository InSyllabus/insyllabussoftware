import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobById, applyJob } from "../api/careerApi";
import "../styles/JobDetails.css"

export default function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentLocation: "",
    degree: "",
    college: "",
    graduationYear: "",
    cgpaOrPercentage: "",
    yearsOfExperience: "",
    currentCompany: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    linkedinProfile: "",
    portfolioOrGithub: "",
  });

  const [resume, setResume] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    const res = await getJobById(id);
    setJob(res.data);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("jobId", job._id);
    fd.append("jobTitle", job.title);

    Object.keys(form).forEach((key) => {
      fd.append(key, form[key]);
    });

    fd.append("resume", resume);

    try {
      const response = await applyJob(fd);

      alert(response.message || "Application Submitted Successfully");

      setForm({
        fullName: "",
        email: "",
        phone: "",
        currentLocation: "",
        degree: "",
        college: "",
        graduationYear: "",
        cgpaOrPercentage: "",
        yearsOfExperience: "",
        currentCompany: "",
        currentCTC: "",
        expectedCTC: "",
        noticePeriod: "",
        linkedinProfile: "",
        portfolioOrGithub: "",
      });

      setResume(null);

      // Redirect to careers page
      navigate("/careers");

    } catch (error) {
      alert(error);
    }
  };

  if (!job) return null;

  return (
    <div className="job-page">
      <div className="container">

        <div className="job-card">

          <div className="job-header">
            <h2>{job.title}</h2>

            <div className="job-meta">
              <span>📍 {job.location}</span>
              <span>💼 {job.employmentType}</span>
              <span>⭐ {job.experience}</span>
            </div>
          </div>

          <div className="job-description">
            <h4>Job Description</h4>
            <p>{job.description}</p>
          </div>

          <form onSubmit={submitHandler}>

            <div className="form-section">
              <h4>Personal Information</h4>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={form.fullName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        fullName: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Email *
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Phone Number *
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Current Location
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={form.currentLocation}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        currentLocation:
                          e.target.value,
                      })
                    }
                  />
                </div>

              </div>
            </div>

            <div className="form-section">
              <h4>Education</h4>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Degree *
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={form.degree}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        degree: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    College *
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={form.college}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        college: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Graduation Year *
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    value={form.graduationYear}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        graduationYear:
                          e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    CGPA / Percentage
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={form.cgpaOrPercentage}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        cgpaOrPercentage:
                          e.target.value,
                      })
                    }
                  />
                </div>

              </div>
            </div>

            <div className="form-section">
              <h4>Experience</h4>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Years of Experience
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    value={form.yearsOfExperience}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        yearsOfExperience:
                          e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Current Company
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={form.currentCompany}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        currentCompany:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Current CTC
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={form.currentCTC}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        currentCTC: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Expected CTC
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={form.expectedCTC}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        expectedCTC: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Notice Period
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={form.noticePeriod}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        noticePeriod: e.target.value,
                      })
                    }
                  />
                </div>

              </div>
            </div>

            <div className="form-section">
              <h4>Professional Profiles</h4>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    LinkedIn Profile
                  </label>

                  <input
                    type="url"
                    className="form-control"
                    value={form.linkedinProfile}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        linkedinProfile:
                          e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Portfolio / GitHub
                  </label>

                  <input
                    type="url"
                    className="form-control"
                    value={form.portfolioOrGithub}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        portfolioOrGithub:
                          e.target.value,
                      })
                    }
                  />
                </div>

              </div>
            </div>

            <div className="form-section">
              <h4>Resume Upload</h4>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="form-control"
                onChange={(e) =>
                  setResume(e.target.files[0])
                }
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn mt-4"
            >
              Submit Application
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}