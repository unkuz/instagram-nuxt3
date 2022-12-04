<script lang="ts" setup>
import { SECTION } from '@@/constants'
import { useGlobalStore } from '@@/store'
import InstagramLogo_ from '@@/assets/svg/instagram_logo.svg'

const globalStore = useGlobalStore()

const handleSelect = (section: SECTION) => {
  globalStore.setSection(section)
}
</script>

<template>
  <NuxtLink to="/">
    <InstagramLogo_
      @click="handleSelect(SECTION.HOME)"
      class="mt-[7px] h-[29px] w-[103px] cursor-pointer fill-black dark:fill-white"
    />
  </NuxtLink>
</template>
