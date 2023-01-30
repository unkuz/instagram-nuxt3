import { AxiosRequestConfig } from 'axios'
import { LocalStoreSerive } from '../localStorage/localStorageService'

export const authInterceptor = (config: AxiosRequestConfig) => {
  const token = LocalStoreSerive.getLocalStorageData('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}
