<script lang="ts" setup>
import { useAuthStore } from '@@/store'
import ErrorPage from '~~/components/Utils/ErrorPage.vue'

definePageMeta({
  layout: 'empty',
})

const authStore = useAuthStore()

const isLogin = computed(() => authStore.data.isLogin)

useWatchWithMounted(isLogin, () => {
  if (isLogin.value) {
    navigateTo('/')
  }
})
</script>

<template>
  <div>
    <ErrorPage />
  </div>
</template>
