<script lang="ts" setup>
import NavBarBottom from '@/components/Molecules/NavBarBottom.vue'
import Header from '@/components/Molecules/Header/index.vue'
import { useGlobalStore } from '@/store'

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
    <NavBarBottom />
  </div>
</template>
