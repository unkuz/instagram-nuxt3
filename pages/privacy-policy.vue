<script lang="ts" setup>
import InstagramLogo_ from '@/assets/svg/instagram_logo.svg'

definePageMeta({
  layout: 'empty',
})
</script>
<template>
  <div
    class="w-full overflow-hidden pb-[60px] pt-[54px] text-[.8rem] dark:text-white sm:overflow-visible md:mx-auto md:pt-[84px] lg:w-[935px]"
  >
    <h1 class="mx-[20px] flex items-center gap-[10px] text-[0.8rem] md:mx-auto">
      <NuxtLink to="/">
        <InstagramLogo_
          class="mt-[7px] w-[200px] cursor-pointer fill-black dark:fill-white" /></NuxtLink
      ><span>clone by</span>
      <div
        class="cursor-pointer font-august text-[1.5rem] uppercase tracking-wider text-c2 drop-shadow-md dark:text-c1"
      >
        cuzknothz
      </div>
    </h1>
    <ContentDoc path="/private-policy" class="mx-[20px] md:mx-auto" />
  </div>
</template>
