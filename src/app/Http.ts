import axios, { AxiosRequestConfig } from 'axios'
import { authSelectors, deauthorize } from 'src/features/Auth/authSlice'
import store from './store'
import { message } from 'antd'

export const rootBackendUrl = process.env.REACT_APP_ROOT_BACKEND_URL

const axiosInstance = axios.create({
  baseURL: rootBackendUrl,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = authSelectors.getToken(store.getState())
    if (token) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` }
    }
    return config
  },
  (error) => {
    console.log(error)
  },
)

axiosInstance.interceptors.response.use(
  (axiosResponse) => axiosResponse.data,
  (error) => {
    if (error.response.status === 401) {
      message.error('Требуется выполнить вход')
      store.dispatch(deauthorize())
    } else {
      message.error('Произошла непредвиденная ошибка')
    }
  },
)

/**
 * @description Обертка над http-клиентом. Должна использоваться при любых запросах
 *  Использование http-клиента напрямую запрещено.
 */
class Http {
  public static get<T>(
    url: string,
    params?: Record<string, any>,
    config?: Omit<AxiosRequestConfig, 'params'>,
  ): Promise<ResponseDto<T>> {
    return axiosInstance.get(url, {
      ...config,
      params,
    })
  }

  public static post<T>(
    url: string,
    body?: any,
    config?: AxiosRequestConfig,
  ): Promise<ResponseDto<T>> {
    return axiosInstance.post(url, body, config)
  }

  public static put<T>(
    url: string,
    body?: any,
    config?: AxiosRequestConfig,
  ): Promise<ResponseDto<T>> {
    return axiosInstance.put(url, body, config)
  }

  public static patch<T>(
    url: string,
    body?: any,
    config?: AxiosRequestConfig,
  ): Promise<ResponseDto<T>> {
    return axiosInstance.patch(url, body)
  }

  public static delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ResponseDto<T>> {
    return axiosInstance.delete(url, config)
  }
}

/**
 * @deprecated Описать ResponseDto
 */
export type ResponseDto<T> = T

export default Http
