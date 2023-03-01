<script lang="ts" setup>
import { useAuthStore } from '@/store'
import ErrorPage from '@/components/Utils/ErrorPage.vue'
import { axios } from '@/services/axios'
import { APP_API } from '~~/apis'

definePageMeta({
  layout: 'empty',
})

const authStore = useAuthStore()

const isLogin = computed(() => authStore.data.isLogin)

const account = reactive({
  user_name: '',
  password: '',
})

const login = () => {
  authStore.login({ ...account })
}

useWatchWithMounted(isLogin, () => {
  if (isLogin.value) {
    navigateTo('/')
  }
})
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div class="flex w-[200px] flex-col gap-[20px]">
      <input type="text" v-model="account.user_name" />
      <input type="password" v-model="account.password" />
      <AtomsButton text="Login" @click="login" />
    </div>
  </div>
</template>
