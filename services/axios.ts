import _axios from 'axios'
import { BASE_URL_API } from '@/apis'
import { useAuthStore } from '@/store'

export const axios = _axios.create({
  baseURL: BASE_URL_API,
  timeout: 1000,
  //   headers: { 'X-Custom-Header': 'foobar' },
})

axios.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  const token = authStore.data.token.access ?? ''
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
