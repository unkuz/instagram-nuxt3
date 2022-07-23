<script lang="ts" setup>
import Header from '~~/components/Header/index.vue'
import { SECTION } from '~~/constants/section'
import { useGlobalStore } from '~~/store/global'
import Navbarbottom from './navbarbottom.vue'

const globalStore = useGlobalStore()
const isShowNavBarBottom = computed(
  () => !(globalStore.getIsMobile && globalStore.getSection === SECTION.MESSENGER)
)
</script>

<template>
  <div>
    <Header />
    <div
      class="mx-auto mt-[50px] w-full overflow-hidden sm:mt-[84px] sm:overflow-visible lg:w-[935px]"
    >
      <slot />
    </div>
    <Navbarbottom v-if="isShowNavBarBottom" />
  </div>
</template>
