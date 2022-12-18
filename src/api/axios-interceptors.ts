import { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const resInterceptor = (res: AxiosResponse) => {
  if (res.status >= 400 && res.status <= 599) {
    throw new Error('Client or server error')
  }
  return res.data
}

const errHandler = (err: AxiosError) => {
  console.error(err)
}

export const setupInterceptors = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.response.use(resInterceptor, errHandler)
  return axiosInstance
}
