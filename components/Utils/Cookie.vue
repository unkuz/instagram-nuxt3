<script setup lang="ts">
import CookieIcon_ from '@@/assets/svg/cookie.svg'
import Button from '@@/components/Atoms/Button.vue'
const acceptCookieUse = () => {
  console.log('HEHE')
}
</script>
<template>
  <div
    class="fixed bottom-[40px] left-[40px] hidden w-[240px] rounded-[0.5rem] bg-c1 p-[40px_24px_24px_24px] shadow-md xl:block"
  >
    <CookieIcon_ class="absolute -top-[23px] right-1/2 translate-x-1/2" />
    <div class="text-[0.8rem]">
      <p>
        {{
          "We care about your data, and we'd love to use cookies to make your experience better."
        }}
      </p>
      <div class="mt-[10px] flex w-full items-center justify-between">
        <NuxtLink to="/privacy-policy" class="cursor-pointer">Privacy Policy</NuxtLink>
        <Button
          @click="acceptCookieUse"
          text="OK"
          class="rounded-[0.25rem] select-none bg-[#00ddb3] px-[32px] py-[8px] leading-[0.8rem] text-c1"
        ></Button>
      </div>
    </div>
  </div>
</template>

