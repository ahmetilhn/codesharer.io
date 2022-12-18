import { setupInterceptors } from './axios-interceptors'
import axios, { AxiosInstance } from 'axios'
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
})
setupInterceptors(axiosInstance)

export default axiosInstance
