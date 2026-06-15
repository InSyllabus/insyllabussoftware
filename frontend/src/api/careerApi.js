import api from "./axios";

// Public APIs
export const getJobs = async () => {
  const { data } = await api.get("/career");
  return data;
};

export const getJobById = async (id) => {
  const { data } = await api.get(`/career/${id}`);
  return data;
};

export const applyJob = async (formData) => {
  const { data } = await api.post("/career/apply", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

// Admin APIs
export const createJob = async (payload) => {
  const { data } = await api.post("/career/admin/jobs", payload);
  return data;
};

export const getAllJobsAdmin = async () => {
  const { data } = await api.get("/career/admin/jobs");
  return data;
};

export const updateJob = async (id, payload) => {
  const { data } = await api.put(
    `/career/admin/jobs/${id}`,
    payload
  );

  return data;
};

export const deleteJob = async (id) => {
  const { data } = await api.delete(
    `/career/admin/jobs/${id}`
  );

  return data;
};

export const getApplications = async () => {
  const { data } = await api.get(
    "/career/admin/applications"
  );

  return data;
};