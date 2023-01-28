<script lang="ts" setup>
import Header from '@@/components/Molecules/Header/index.vue'
import { SectionEnum } from '@@/constants/section'
import { useGlobalStore } from '@@/store'
import NavBarBottom from '@@/components/Molecules/NavBarBottom.vue'

const globalStore = useGlobalStore()
const isShowNavBarBottom = computed(
  () =>
    !(globalStore.getIsMobile && globalStore.section === SectionEnum.MESSENGER)
)
</script>

<template>
  <div>
    <Header />
    <!-- <Extension /> -->
    <div
      class="mx-auto w-full overflow-hidden pt-[54px] pb-[60px] dark:text-white sm:overflow-visible md:pt-[84px] lg:w-[935px]"
    >
      <slot />
    </div>
    <NavBarBottom v-if="isShowNavBarBottom" />
  </div>
</template>
