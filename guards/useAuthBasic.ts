import { useAuthStore } from '@/store'
import { useWatchWithMounted } from '@/composables'

export const useAuthBasic = () => {
  const authStore = useAuthStore()

  const isLogin = computed(() => authStore.data.isLogin)

  useWatchWithMounted(isLogin, () => {
    if (!isLogin.value) {
      navigateTo('/auth')
    }
  })
}
