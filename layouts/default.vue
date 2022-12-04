<script lang="ts" setup>
import Header from '@@/components/Header/index.vue'
import { SECTION } from '@@/constants/section'
import { useGlobalStore } from '@@/store'
import Navbarbottom from './navbarbottom.vue'
import Extension from '@@/components/Extension/index.vue'

const globalStore = useGlobalStore()
const isShowNavBarBottom = computed(
  () => !(globalStore.getIsMobile && globalStore.section === SECTION.MESSENGER)
)
</script>

<template>
  <div>
    <Header />
    <Extension />
    <div
      class="mx-auto w-full overflow-hidden dark:text-white sm:overflow-visible sm:pt-[84px] lg:w-[935px]"
    >
      <slot />
    </div>
    <Navbarbottom v-if="isShowNavBarBottom" />
  </div>
</template>
