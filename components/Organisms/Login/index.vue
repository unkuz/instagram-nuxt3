<script lang="ts" setup>
import { useAuthStore } from '@/store'

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
  <div class="flex h-screen w-full items-center justify-center text-[0.8rem]">
    <div class="flex h-[400px] w-[600px] overflow-hidden rounded-2xl border-[1px] border-gray-300">
      <div class="flex-[1]" />
      <div class="mx-[20px] h-full w-full flex-[1] pb-[50px]">
        <div class="flex h-full flex-[1] flex-col items-center justify-end space-y-[20px]">
          <div
            class="relative h-[50px] w-full overflow-hidden rounded-[15px] border-[1px] border-gray-200"
          >
            <div class="absolute left-[7%] top-[0px] text-[0.8rem]">Username</div>
            <input
              type="text"
              class="absolute bottom-0 left-1/2 h-[30px] w-[237px] -translate-x-1/2 focus:outline-none"
            />
          </div>
          <div class="relative h-[50px] w-full rounded-[15px] border-[1px] border-gray-200">
            <div class="absolute left-[7%] top-[0px] text-[0.8rem]">Password</div>
            <input
              type="password"
              class="absolute bottom-0 left-1/2 h-[30px] w-[237px] -translate-x-1/2 focus:outline-none"
            />
          </div>
          <div class="flex w-full justify-between space-x-[20px]">
            <div
              class="flex h-[50px] flex-1 items-center justify-center rounded-[15px] border-[1px] border-gray-200"
            >
              <span>Login</span>
            </div>
            <div
              class="flex h-[50px] flex-1 items-center justify-center rounded-[15px] border-[1px] border-gray-200"
            >
              <span>Create Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
