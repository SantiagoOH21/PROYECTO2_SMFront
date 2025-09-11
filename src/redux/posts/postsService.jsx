import axios from "axios";

const API_URL = "http://localhost:3000";

const getAll = async (page = 1) => {
  const res = await axios.get(`${API_URL}/posts?page=${page}`);

  return res.data;
};

const create = async (post) => {
  const token = localStorage.getItem("token");
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

const deletePost = async (id) => {
  const token = localStorage.getItem("token");
  const res = await axios.delete(`${API_URL}/posts/${id}`, {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const update = async (post) => {
  const token = localStorage.getItem("token");
  const updatedPost = {
    name: post.name,
    text: post.text,
    // visibility: post.visibility,
    // image: post.image,
  };
  console.log("Datos enviados a PUT:", updatedPost);
  console.log("ID del post:", post.id);
  const res = await axios.put(`${API_URL}/posts/${post.id}`, updatedPost, {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const postsService = {
  getAll,
  create,
  getById,
  getPostByName,
  deletePost,
  update,
};

export default postsService;
