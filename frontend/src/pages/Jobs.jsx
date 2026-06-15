import { useEffect, useState } from "react";
import {
  getAllJobsAdmin,
  deleteJob,
} from "../api/careerApi";
import CreateJob from "./CreateJob";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const res = await getAllJobsAdmin();
      setJobs(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      await deleteJob(id);
      loadJobs();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Jobs Management</h2>

        <button
          className="btn btn-dark"
          onClick={() => setShowCreateForm(true)}
        >
          + Create Job
        </button>
      </div>

      {showCreateForm && (
  <>
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              Create New Job
            </h5>

            <button
              type="button"
              className="btn-close"
              onClick={() =>
                setShowCreateForm(false)
              }
            />
          </div>

          <div className="modal-body">
            <CreateJob
              onSuccess={() => {
                setShowCreateForm(false);
                loadJobs();
              }}
            />
          </div>

        </div>
      </div>
    </div>
  </>
)}

      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Type</th>
              <th>Experience</th>
              <th>Status</th>
              <th width="150">Actions</th>
            </tr>
          </thead>

          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <tr key={job._id}>
                  <td>{job.title}</td>
                  <td>{job.location}</td>
                  <td>{job.employmentType}</td>
                  <td>{job.experience}</td>

                  <td>
                    {job.isActive ? (
                      <span className="badge bg-success">
                        Active
                      </span>
                    ) : (
                      <span className="badge bg-danger">
                        Inactive
                      </span>
                    )}
                  </td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        handleDelete(job._id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No Jobs Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}