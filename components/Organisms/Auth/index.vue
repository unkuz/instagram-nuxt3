<script lang="ts" setup>
import { ToastTypeEnum, useAuthStore, useToastStore } from '@/store'
import { IAccountLogin, SignInUpEnum } from '@/type'
import { ErrorMessage, Field, Form } from 'vee-validate'
import Logo from '@/components/Molecules/Header/Logo.vue'
import { useFocus } from '@vueuse/core'
import { gsap } from 'gsap'
import SignIn from './SignIn/index.vue'
import SignUp from './SignUp/index.vue'
import InstagramLogo_ from '@/assets/svg/instagram_logo.svg'
import Slider from './Common/Slider.vue'
import { AUTH_SLIDER } from '@/constants'

const authStore = useAuthStore()
const toastStore = useToastStore()

const thumbBar = $ref<HTMLDivElement>()

const usernameRef = ref()
const placeHolderUsernameRef = ref<HTMLDivElement>()

let selected = $ref(SignInUpEnum.SIGN_IN)

let tlThumbBar = gsap.timeline({})

watch(
  () => selected,
  (val) => {
    if (_isEqual(val, SignInUpEnum.SIGN_UP)) {
      tlThumbBar.to(thumbBar!, {
        right: 0,
        duration: 0.1,
      })
    } else {
      tlThumbBar.reverse()
    }
  }
)

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

const title = $computed(() => {
  if (_isEqual(selected, SignInUpEnum.SIGN_IN)) {
    return 'Wait a minutes ! Who are you ?'
  }
  return 'Create an account. Enter below ! '
})

const setSelect = (val: SignInUpEnum) => (selected = val)
</script>
<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div class="flex w-[400px] flex-col rounded-3xl bg-c1 duration-200 dark:bg-c19">
      <InstagramLogo_
        class="mx-auto mt-[7px] w-[200px] cursor-pointer fill-black dark:fill-white"
      />
      <div class="mx-auto mb-[25px]">{{ title }}</div>
      <Slider :arr="AUTH_SLIDER" :select="selected" @set="setSelect" />
      <template v-if="selected === SignInUpEnum.SIGN_IN"><SignIn /></template>
      <template v-else><SignUp /></template>
    </div>
  </div>
</template>
