<script lang="ts" setup>
import Navbarbottom from './navbarbottom.vue'
import Header from '~~/components/Header/index.vue'
import { useGlobalStore } from '~~/store/global'
const globalStore = useGlobalStore()
const isMobile = computed(() => globalStore.getIsMobile)
</script>

<template>
  <div>
    <Header v-if="!isMobile" />
    <div
      :class="`mx-auto  ${isMobile ? 'mt-0' : ''} w-full text-[0.8rem] md:mt-[84px] lg:w-[605px]`"
    >
      <slot />
    </div>
    <Navbarbottom />
  </div>
</template>
