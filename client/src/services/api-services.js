import axios from "axios";

const baseUrl = "http://localhost:8000/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createOne = (content) => {
  const request = axios.post(baseUrl, { content: content });
  return request.then((response) => response.data);
};

const deleteOne = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const sortBy = ({ sort_by, order }) => {
  return axios
    .get(`${baseUrl}/sorted?sort_by=${sort_by}&order=${order}`)
    .then((response) => response.data);
};

const updateImportant = ({ id, important }) => {
  console.log(important);
  const request = axios.put(`${baseUrl}/${id}`, { important });
  return request.then((response) => response.data);
};

export default { getAll, createOne, deleteOne, sortBy, updateImportant };
