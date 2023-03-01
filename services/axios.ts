import _axios from 'axios'
import { useAuthStore } from '~~/store'

export const axios = _axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 1000,
  //   headers: { 'X-Custom-Header': 'foobar' },
})

axios.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  const token = authStore.data.access ?? ''
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
