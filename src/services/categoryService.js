import axios from "../setup/axios";

const fetchCategory = () => {
  return axios.get(`/api/category`);
};

export { fetchCategory };
