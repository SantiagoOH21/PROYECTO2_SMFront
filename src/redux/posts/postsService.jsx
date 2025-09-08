import axios from "axios";

const API_URL = "http://localhost:3000";

const getAll = async () => {
  const res = await axios.get(`${API_URL}/posts`);
  return res.data.posts;
};

const create = async (post) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.post(`${API_URL}/posts`, post, {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const getById = async (id) => {
  const res = await axios.get(`${API_URL}/posts/id/${id}`);

  return res.data;
};

const getPostByName = async (postName) => {
  const res = await axios.get(`${API_URL}/posts/name/${postName}`);
  return res.data;
};

const postsService = {
  getAll,
  create,
  getById,
  getPostByName,
};

export default postsService;
