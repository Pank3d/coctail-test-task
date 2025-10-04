import axios, { AxiosError } from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const errorMessage = error.response?.data || error.message || "Unknown error occurred";
    const status = error.response?.status;

    console.error(`API Error [${status}]:`, errorMessage);

    return Promise.reject(error);
  }
);
