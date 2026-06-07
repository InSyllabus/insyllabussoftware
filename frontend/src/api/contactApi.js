import API from "./axios";

export const submitContactForm = async (data) => {
  const response = await API.post(
    "/contact/submit",
    data
  );

  return response.data;
};

export const getAllContacts = async () => {
  const response = await API.get(
    "/contact/all"
  );

  return response.data;
};

export const deleteContact = async (id) => {
  const response = await API.delete(
    `/contact/${id}`
  );

  return response.data;
};