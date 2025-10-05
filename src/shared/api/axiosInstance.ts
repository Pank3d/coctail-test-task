import axios, { AxiosError } from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
})

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)
