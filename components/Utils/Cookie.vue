<script setup lang="ts">
import CookieIcon_ from '@@/assets/svg/cookie.svg'
import Button from '@@/components/Atoms/Button.vue'
import { useWindowResizeCallback } from '@@/composables'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { gsap } from 'gsap'

const containerRef = $ref<HTMLDivElement | null>(null)
const breakpoints = useBreakpoints(breakpointsTailwind)

const largerThanSm = $(breakpoints.greater('md'))

const animateOut = () =>
  gsap.to(containerRef, { bottom: -200, display: 'none', duration: 1 })

const animateIn = () => {
  Object.assign(containerRef!.style, {
    bottom: largerThanSm ? '40px' : '85px',
  })
}

const acceptCookieUse = () => {
    animateOut()
}

onMounted(() => {
  const TIME_DELAY_START_APPARENT = 2500
  setTimeout(animateIn, TIME_DELAY_START_APPARENT)
})

useWindowResizeCallback(animateIn, false)
</script>
<template>
  <div
    ref="containerRef"
    :class="[
      'fixed -bottom-[200px] left-[20px] right-[20px]  rounded-[0.5rem] bg-c1 p-[40px_24px_20px_24px]  shadow-md duration-1000 dark:bg-c2 dark:text-c1  md:left-[40px] md:right-[40px]  md:w-[290px]',
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
