import axios from "axios";
import { API_URL, AUTH_ROUTE } from "../../api/config";

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}${AUTH_ROUTE}`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Register user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}${AUTH_ROUTE}login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};
export default authService;
