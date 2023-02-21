import axios from "../setup/axios";

const fetchCategory = () => {
  return axios.get(`/api/category`);
};

const createNewCategory = (categoryData) => {
  return axios.post("/api/category", {
    ...categoryData,
  });
};

const updateCategory = (id, categoryData) => {
  return axios.put(`/api/category/${id}`, {
    ...categoryData,
  });
};

const deleteCategory = (categoryId) => {
  return axios.delete(`/api/category/${categoryId}`);
};

const getCategoryById = (id) => {
  return axios.get(`/api/category/${id}`);
};

export {
  fetchCategory,
  createNewCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
};
