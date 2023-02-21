import axios from "../setup/axios";

const sendContact = (data) => {
  return axios.post("/api/contact", {
    ...data,
  });
};

const deleteContact = (id) => {
  return axios.delete(`/api/contact/${id}`);
};

const fetchContact = () => {
  return axios.get("/api/contact");
};

export { sendContact, deleteContact, fetchContact };
