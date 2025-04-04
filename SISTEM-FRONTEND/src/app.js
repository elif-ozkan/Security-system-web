import axios from "axios";

const API_URL = "";
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
//GET isteği için
export const getUsers = async () => {
  try {
    const response = await api.get("/users"); //Endpoint
    return response.data;
  } catch (error) {
    console.error("API request failed", error);
    throw error;
  }
};
//POST isteği örneği
export const createUser = async (userData) => {
  try {
    const response = await api.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("API request failed", error);
    throw error;
  }
};
