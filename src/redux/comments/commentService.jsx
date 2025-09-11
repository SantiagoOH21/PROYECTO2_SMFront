import axios from "axios";

const API_URL = "http://localhost:3000";

const getAll = async () => {
  const res = await axios.get(`${API_URL}/comments`);
  return res.data;
};

const createComment = async (commentData) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${API_URL}/comments`, commentData, {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const commentService = {
  getAll,
  createComment,
};

export default commentService;
