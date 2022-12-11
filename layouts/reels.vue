<script lang="ts" setup>
import Header from '@@/components/Header/index.vue'
import { useGlobalStore } from '@@/store'
import Navbarbottom from './navbarbottom.vue'

const globalStore = useGlobalStore()
const isMobile = computed(() => globalStore.getIsMobile)
</script>

<template>
  <div>
    <Header v-if="!isMobile" />
    <div
      :class="[
        'mx-auto w-full text-[0.8rem] md:mt-[84px] lg:w-[605px]',
        {
          'mt-0': isMobile,
        },
      ]"
    >
      <slot />
    </div>
    <Navbarbottom />
  </div>
</template>
