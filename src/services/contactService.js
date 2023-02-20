import axios from "../setup/axios";

const sendContact = (data) => {
  return axios.post("/api/contact", {
    ...data,
  });
};

const deleteContact = (data) => {
  return axios.delete("/api/contact", {
    data: {
      id: data.id,
    },
  });
};

const fetchContact = (data) => {
  return axios.get("/api/contact");
};

export { sendContact, deleteContact, fetchContact };
