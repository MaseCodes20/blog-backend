import axios from "axios";
import { API_URL, POSTS_ROUTE } from "../../api/config";

// Get all Posts in Database
const getPosts = async () => {
  const response = await axios.get(`${API_URL}${POSTS_ROUTE}`);

  return response.data.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};

// Get Post
const getPost = async (id) => {
  const response = await axios.get(`${API_URL}${POSTS_ROUTE}/${id}`);

  return response.data;
};

// Add Post to Database
const setPost = async (data) => {
  const { postData, token } = data;
  const response = await axios.post(`${API_URL}${POSTS_ROUTE}`, postData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

// Update Post in Database
const postUpdate = async (data) => {
  const { postData, token, postId } = data;
  const response = await axios.put(
    `${API_URL}${POSTS_ROUTE}/${postId}`,
    postData,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return response.data;
};

// Update Post Likes in Database
const likesUpdate = async (data) => {
  const { postData, token, postId } = data;
  const response = await axios.put(
    `${API_URL}${POSTS_ROUTE}/${postId}/likes`,
    postData,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return response.data;
};

// Update Post Comments in Database
const commentsUpdate = async (data) => {
  const { postData, token, postId } = data;
  const response = await axios.put(
    `${API_URL}${POSTS_ROUTE}/${postId}/comments`,
    postData,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return response.data;
};

const removePost = async (data) => {
  const { postId, token } = data;
  const response = await axios.delete(`${API_URL}${POSTS_ROUTE}/${postId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const postsService = {
  getPosts,
  getPost,
  setPost,
  removePost,
  postUpdate,
  likesUpdate,
  commentsUpdate,
};

export default postsService;
