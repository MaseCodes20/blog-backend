import axios from "axios";

const API_URL = "/api/v1/users";

// Get all Users in Database
const getUsers = async (token) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

// Add User to Database
const setUser = async (data) => {
  const { userData, token } = data;
  const response = await axios.post(API_URL, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

// Update User in Database
const userUpdate = async (data) => {
  const { userData, token, userId } = data;
  const response = await axios.put(`${API_URL}/${userId}`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const removeUser = async (data) => {
  const { userId, token } = data;
  const response = await axios.delete(`${API_URL}/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const usersService = {
  getUsers,
  setUser,
  userUpdate,
  removeUser,
};

export default usersService;
