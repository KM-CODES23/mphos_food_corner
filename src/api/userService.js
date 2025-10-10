import axios from "axios";

const API_URL = "https://localhost:7246/api/users"; // your backend URL

// 🔹 Register new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 Login existing user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
