import { setupInterceptors } from './axios-interceptors'
import axios, { AxiosInstance } from 'axios'
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})
setupInterceptors(axiosInstance)

export default axiosInstance
