<script setup lang="ts">
import CookieIcon_ from '@@/assets/svg/cookie.svg'
import Button from '@@/components/Atoms/Button.vue'
import { useWindowResizeCallback } from '@@/composables'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { gsap } from 'gsap'

const containerRef = $ref<HTMLDivElement | null>(null)
const breakpoints = useBreakpoints(breakpointsTailwind)

let tl = gsap.timeline({})

const largerThanSm = $(breakpoints.greater('md'))

const animationOut = () => {
  tl.to(containerRef, {
    bottom: -200,
    duration: 0.5,
    display: 'none',
  })
}

const animationIn = () => {
  tl.to(containerRef, {
    bottom: largerThanSm ? 40 : 85,
    delay: 1,
    duration: 0.5,
  })
}

const acceptCookieUse = () => {
  animationOut()
}

onMounted(() => {
  animationIn()
})

useWindowResizeCallback(() => {
  Object.assign(containerRef!.style, {
    bottom: largerThanSm ? '40px' : '85px',
  })
})
</script>
<template>
  <div
    ref="containerRef"
    :class="[
      'fixed -bottom-[200px] left-[20px] right-[20px]  rounded-[0.5rem] bg-c1 p-[40px_24px_20px_24px]  shadow-md dark:bg-c2 dark:text-c1  md:left-[40px] md:right-[40px]  md:w-[290px]',
    ]"
  >
    <CookieIcon_ class="absolute -top-[23px] right-1/2 translate-x-1/2" />
    <div class="text-[0.8rem]">
      <p>
        {{
          "We care about your data, and we'd love to use cookies to make your experience better 💦"
        }}
      </p>
      <div class="mt-[10px] flex w-full items-center justify-between">
        <NuxtLink to="/privacy-policy" class="cursor-pointer">
          <span class="text-c9 dark:text-c14" @click="animationOut"
            >Privacy Policy</span
          >
        </NuxtLink>
        <Button
          text="OK"
          class="select-none bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500"
          @click="acceptCookieUse"
        />
      </div>
    </div>
  </div>
</template>
