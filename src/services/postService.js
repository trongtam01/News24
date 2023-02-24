import axios from "../setup/axios";

const fetchPost = () => {
  return axios.get(`/api/post`);
};

const createPost = (data) => {
  console.log("createPost", data);
  return axios.post("/api/post", data);
};

const getPostById = (id) => {
  return axios.get(`/api/post/${id}`);
};

export { fetchPost, createPost, getPostById };
