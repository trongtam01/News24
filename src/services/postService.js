import axios from "../setup/axios";

const fetchPost = () => {
  return axios.get(`/api/post`);
};

const createPost = (data) => {
  console.log("data", data);
  return axios.post(`/api/post`, {
    ...data,
  });
};

export { fetchPost, createPost };
