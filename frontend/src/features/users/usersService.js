import axios from "axios";
import { API_URL, USERS_ROUTE } from "../../api/config";

// Get all Users in Database
const getUsers = async () => {
  const response = await axios.get(`${API_URL}${USERS_ROUTE}`);

  return response.data;
};

// Add User to Database
const setUser = async (data) => {
  const { userData, token } = data;
  const response = await axios.post(`${API_URL}${USERS_ROUTE} `, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

// Update User in Database
const userUpdate = async (data) => {
  const { userData, token, userId } = data;
  const response = await axios.put(
    `${API_URL}${USERS_ROUTE}/${userId}`,
    userData,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return response.data;
};

const removeUser = async (data) => {
  const { userId, token } = data;
  const response = await axios.delete(`${API_URL}${USERS_ROUTE}/${userId}`, {
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
