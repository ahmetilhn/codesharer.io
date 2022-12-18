import { setupInterceptors } from './axios-interceptors'
import axios, { AxiosInstance } from 'axios'
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
setupInterceptors(axiosInstance)

export default axiosInstance
