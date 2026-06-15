import { useEffect, useState } from "react";
import { getApplications } from "../api/careerApi";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] =
    useState(null);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const res = await getApplications();
      setApplications(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Applications</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Job Title</th>
                  <th width="150">Action</th>
                </tr>
              </thead>

              <tbody>
                {applications.length > 0 ? (
                  applications.map((app) => (
                    <tr key={app._id}>
                      <td>{app.fullName}</td>
                      <td>{app.email}</td>
                      <td>{app.phone}</td>
                      <td>{app.job?.title}</td>

                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#applicationModal"
                          onClick={() =>
                            setSelectedApplication(app)
                          }
                        >
                          View Application
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center"
                    >
                      No Applications Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}

      <div
        className="modal fade"
        id="applicationModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            {selectedApplication && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title">
                    Candidate Details
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <h6 className="mb-3">
                    Personal Information
                  </h6>

                  <p>
                    <strong>Name:</strong>{" "}
                    {selectedApplication.fullName}
                  </p>

                  <p>
                    <strong>Email:</strong>{" "}
                    {selectedApplication.email}
                  </p>

                  <p>
                    <strong>Phone:</strong>{" "}
                    {selectedApplication.phone}
                  </p>

                  <p>
                    <strong>Location:</strong>{" "}
                    {
                      selectedApplication.currentLocation
                    }
                  </p>

                  <hr />

                  <h6 className="mb-3">Education</h6>

                  <p>
                    <strong>Degree:</strong>{" "}
                    {
                      selectedApplication.education
                        ?.degree
                    }
                  </p>

                  <p>
                    <strong>College:</strong>{" "}
                    {
                      selectedApplication.education
                        ?.college
                    }
                  </p>

                  <p>
                    <strong>Graduation Year:</strong>{" "}
                    {
                      selectedApplication.education
                        ?.graduationYear
                    }
                  </p>

                  <p>
                    <strong>CGPA:</strong>{" "}
                    {
                      selectedApplication.education
                        ?.cgpaOrPercentage
                    }
                  </p>

                  <hr />

                  <h6 className="mb-3">Experience</h6>

                  <p>
                    <strong>Experience:</strong>{" "}
                    {
                      selectedApplication.yearsOfExperience
                    }{" "}
                    Years
                  </p>

                  <p>
                    <strong>Current Company:</strong>{" "}
                    {
                      selectedApplication.currentCompany
                    }
                  </p>

                  <p>
                    <strong>Current CTC:</strong>{" "}
                    {
                      selectedApplication.currentCTC
                    }
                  </p>

                  <p>
                    <strong>Expected CTC:</strong>{" "}
                    {
                      selectedApplication.expectedCTC
                    }
                  </p>

                  <p>
                    <strong>Notice Period:</strong>{" "}
                    {
                      selectedApplication.noticePeriod
                    }
                  </p>

                  <hr />

                  <h6 className="mb-3">
                    Professional Profiles
                  </h6>

                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href={
                        selectedApplication.linkedinProfile
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Profile
                    </a>
                  </p>

                  <p>
                    <strong>Portfolio/GitHub:</strong>{" "}
                    <a
                      href={
                        selectedApplication.portfolioOrGithub
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Link
                    </a>
                  </p>
                </div>

                <div className="modal-footer">
                  <a
                    href={`${import.meta.env.VITE_API_URL.replace(
                      "/api",
                      ""
                    )}${selectedApplication.resume}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success"
                  >
                    View Resume
                  </a>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}