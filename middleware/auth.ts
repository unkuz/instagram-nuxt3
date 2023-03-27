import { useAuthStore } from '@/store'
import jwt_decode from 'jwt-decode'

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()
  const accessToken = authStore?.data?.token?.access

  if (!accessToken) {
    return navigateTo('/auth/')
  }

  try {
    const exp = (jwt_decode(accessToken) as { exp: number })?.exp

    if (exp > Date.now()) {
      authStore.getNewAccessToken(accessToken)
    }
  } catch (e) {
    navigateTo('/auth/')
  }
})
