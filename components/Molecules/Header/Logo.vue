<script lang="ts" setup>
import { SectionEnum } from '@/constants'
import { useGlobalStore } from '@/store'
import InstagramLogo_ from '@/assets/svg/instagram_logo.svg'

const globalStore = useGlobalStore()

const handleSelect = (section: SectionEnum) => globalStore.setSection(section)
</script>

<template>
  <NuxtLink to="/">
    <InstagramLogo_
      class="mt-[7px] h-[29px] w-[103px] cursor-pointer fill-black dark:fill-white"
      @click="handleSelect(SectionEnum.HOME)"
    />
  </NuxtLink>
</template>
