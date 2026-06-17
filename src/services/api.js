import axios from "axios";
import { API_BASE_URL } from "../config";
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const loginAPI = async (credentials) => {
  const response = await apiClient.post("/login", credentials);
  return response.data; 
};

export const registerAPI = async (userData) => {
  const response = await apiClient.post("/register", userData);
  return response.data;
};

// Get User Profile Call
export const getProfileAPI = async () => {
  const response = await apiClient.get("/profile");
  return response.data;
};

/* ==========================================================================
   Products & Courses API Functions 
   ========================================================================== */
export const getCoursesAPI = async () => {
  const response = await apiClient.get("/courses");
  return response.data;
};

// 🆕 Ek single course fetch karne ke liye naya function add kiya
export const getSingleCourseAPI = async (courseId) => {
  const response = await apiClient.get(`/courses/${courseId}`);
  return response.data;
};

export const addProductAPI = async (productData) => {
  const response = await apiClient.post("/products", productData);
  return response.data;
};

export const updateProductAPI = async (productId, updatedData) => {
  const response = await apiClient.put(`/products/${productId}`, updatedData);
  return response.data;
};