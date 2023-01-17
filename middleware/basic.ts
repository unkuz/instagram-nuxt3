import { useAuthStore } from '@@/store'

export default defineNuxtRouteMiddleware(() => {
    const authStore = useAuthStore()

    if (!authStore.data.isLogin) {
        return navigateTo('/login')
    }
})
