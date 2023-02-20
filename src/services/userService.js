import axios from "../setup/axios";

const loginUser = (userData) => {
  return axios.post("/api/authmanagement/login", {
    ...userData,
  });
};

const registerUser = (userData) => {
  return axios.post("/api/authmanagement/register", {
    ...userData,
  });
};

const logoutUser = () => {
  return axios.post("/api/authmanagement/logout");
};

const getUserAccount = () => {
  return axios.get("/api/authmanagement/getuseraccount");
};

export { loginUser, registerUser, logoutUser, getUserAccount };
