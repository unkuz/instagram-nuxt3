<script setup lang="ts">
import CookieIcon_ from '@@/assets/svg/cookie.svg'
import Button from '@@/components/Atoms/Button.vue'
import { TIME_DELAY_START_APPARENT_TOOLTIP } from '@@/configs'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { gsap } from 'gsap'

const containerRef = $ref<HTMLDivElement | null>(null)
const breakpoints = useBreakpoints(breakpointsTailwind)

const largerThanSm = $(breakpoints.greater('md'))

let tl: TimelineLite = gsap.timeline({})

const animateOut = () => {
  tl.reverse()
}

const acceptCookieUse = () => {
  animateOut()
}

onMounted(() => {
  setTimeout(() => {
    tl.to(containerRef, {
      bottom: largerThanSm ? 40 : 85,
      ease: 'elastic.out(1, 0.5)',
      duration: 1,
    })
  }, TIME_DELAY_START_APPARENT_TOOLTIP)
})
</script>
<template>
  <div
    ref="containerRef"
    :class="[
      'fixed -bottom-[200px] left-[20px] right-[20px] rounded-[0.5rem] bg-c1 p-[40px_24px_20px_24px] shadow-md   dark:bg-c2 dark:text-c1  md:left-[40px] md:right-[40px]  md:w-[290px]',
    ]"
  >
    <CookieIcon_ class="absolute -top-[23px] right-1/2 translate-x-1/2" />
    <div class="text-[0.8rem]">
      <p>
        {{ "We care about your data, and we'd love to use cookies to make your experience better 💦" }}
      </p>
      <div class="mt-[10px] flex w-full items-center justify-between">
        <NuxtLink to="/privacy-policy" class="cursor-pointer">
          <span class="text-c9 dark:text-c14" @click="animateOut">Privacy Policy</span>
        </NuxtLink>
        <Button text="OK" class="select-none bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500" @click="acceptCookieUse" />
      </div>
    </div>
  </div>
</template>
