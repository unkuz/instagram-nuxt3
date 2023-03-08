import { useAuthStore } from '@/store'

export const useAuthBasic = () => {
  const authStore = useAuthStore()

  const accessToken = computed(() => authStore.data.token.access)

  watchEffect(() => {
    if (!accessToken) {
      navigateTo('/auth/')
    }
  })
}
