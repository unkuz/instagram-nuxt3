<script lang="ts" setup>
import { ToastTypeEnum, useAuthStore, useToastStore } from '@/store'
import { IAccountLogin, SignInUpEnum } from '@/type'
import { ErrorMessage, Field, Form } from 'vee-validate'
import Logo from '@/components/Molecules/Header/Logo.vue'
import { useFocus } from '@vueuse/core'
import { gsap } from 'gsap'
import SignIn from './SignIn/index.vue'
import SignUp from './SignUp/index.vue'

const authStore = useAuthStore()
const toastStore = useToastStore()

const usernameRef = ref()
const placeHolderUsernameRef = ref<HTMLDivElement>()

const selected = $ref(SignInUpEnum.SIGN_IN)

const { focused } = useFocus(usernameRef, { initialValue: false })

const focus = reactive({
  username: false,
  password: false,
})

const state = reactive({
  user_name: '',
})

watch(focused, (val) => {
  focus.username = true

  gsap.to(placeHolderUsernameRef.value!, {
    bottom: val || state.user_name ? 'auto' : '50%',
    translateY: val || state.user_name ? 'auto' : '50%',
    top: val || state.user_name ? '-8px' : 'auto',
  })
})

const isLogin = computed(() => authStore.data.isLogin)

useWatchWithMounted(isLogin, () => {
  if (isLogin.value) {
    navigateTo('/')
  }
})
</script>
<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div class="flex w-[400px] flex-col rounded-3xl bg-c1">
      <div class="mx-auto mb-[15px]">Welcome back! Please enter your details</div>
      <div
        class="mx-auto flex h-[40px] w-[250px] items-center gap-[5px] rounded-2xl bg-c2/20 px-[5px]"
      >
        <div
          @click="selected = SignInUpEnum.SIGN_IN"
          :class="[
            'flex h-[80%] w-[100px] flex-1 items-center justify-center rounded-[10px] ',
            {
              'bg-c1': selected === SignInUpEnum.SIGN_IN,
            },
          ]"
        >
          SignIn
        </div>
        <div
          @click="selected = SignInUpEnum.SIGN_UP"
          :class="[
            'flex h-[80%] w-[100px] flex-1 items-center justify-center rounded-[10px] ',
            {
              'bg-c1': selected === SignInUpEnum.SIGN_UP,
            },
          ]"
        >
          SignUp
        </div>
      </div>
      <template v-if="selected === SignInUpEnum.SIGN_IN"><SignIn /></template>
      <template v-else><SignUp /></template>
    </div>
  </div>
</template>
