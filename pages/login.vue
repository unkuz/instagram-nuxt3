<script lang="ts" setup>
import { useAuthStore } from '@@/store';
import ErrorPage from '~~/components/Utils/ErrorPage.vue';

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
  <div
    class="flex h-[calc(100vh-84px)] w-full items-center justify-center text-[0.85rem]"
  >
    <ErrorPage />
  </div>
</template>
