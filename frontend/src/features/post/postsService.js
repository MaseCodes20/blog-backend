import axios from "axios";

const API_URL = "api/v1/posts";

// Get all Posts in Database
const getPosts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Add Post to Database
const setPost = async (data) => {
  const { postData, token } = data;
  const response = await axios.post(API_URL, postData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

// Update Post in Database
const postUpdate = async (data) => {
  const { postData, token, postId } = data;
  const response = await axios.put(`${API_URL}/${postId}`, postData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const removePost = async (data) => {
  const { postId, token } = data;
  const response = await axios.delete(`${API_URL}/${postId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const postsService = {
  getPosts,
  setPost,
  removePost,
  postUpdate,
};

export default postsService;
