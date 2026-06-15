import { useState } from "react";
import { createJob } from "../api/careerApi";

export default function CreateJob({ onSuccess }) {
  const [job, setJob] = useState({
    title: "",
    location: "",
    employmentType: "Full Time",
    experience: "",
    description: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createJob(job);

      alert("Job Created Successfully");

      setJob({
        title: "",
        location: "",
        employmentType: "Full Time",
        experience: "",
        description: "",
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
   <form onSubmit={submitHandler}>
  <div className="row">

    <div className="col-md-6 mb-3">
      <label className="form-label">
        Job Title
      </label>

      <input
        className="form-control"
        value={job.title}
        onChange={(e) =>
          setJob({
            ...job,
            title: e.target.value,
          })
        }
      />
    </div>

    <div className="col-md-6 mb-3">
      <label className="form-label">
        Location
      </label>

      <input
        className="form-control"
        value={job.location}
        onChange={(e) =>
          setJob({
            ...job,
            location: e.target.value,
          })
        }
      />
    </div>

    <div className="col-md-6 mb-3">
      <label className="form-label">
        Employment Type
      </label>

      <select
        className="form-select"
        value={job.employmentType}
        onChange={(e) =>
          setJob({
            ...job,
            employmentType: e.target.value,
          })
        }
      >
        <option>Full Time</option>
        <option>Part Time</option>
        <option>Internship</option>
        <option>Contract</option>
      </select>
    </div>

    <div className="col-md-6 mb-3">
      <label className="form-label">
        Experience
      </label>

      <input
        className="form-control"
        placeholder="e.g. 2-4 Years"
        value={job.experience}
        onChange={(e) =>
          setJob({
            ...job,
            experience: e.target.value,
          })
        }
      />
    </div>

    <div className="col-md-12 mb-3">
      <label className="form-label">
        Description
      </label>

      <textarea
        rows="6"
        className="form-control"
        value={job.description}
        onChange={(e) =>
          setJob({
            ...job,
            description: e.target.value,
          })
        }
      />
    </div>

  </div>

  <div className="text-end">
    <button
      type="submit"
      className="btn btn-primary"
    >
      Create Job
    </button>
  </div>
</form>
  );
}