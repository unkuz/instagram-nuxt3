<script lang="ts" setup>
import Header from '@@/components/Molecules/Header/index.vue'
import { SectionEnum } from '@@/constants/section'
import { useGlobalStore } from '@@/store'
import NavBarBottom from '@@/components/Molecules/NavBarBottom.vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const globalStore = useGlobalStore()
const isShowNavBarBottom = computed(
  () =>
    !(globalStore.getIsMobile && globalStore.section === SectionEnum.MESSENGER)
)

const breakpoints = useBreakpoints(breakpointsTailwind)
const smallerThanMd = $(breakpoints.smallerOrEqual('md'))

const noNeedPadingTop = $(
  computed(() => {
    return (
      [
        SectionEnum.MESSENGER,
        SectionEnum.REELS,
        SectionEnum.SEARCH,
        SectionEnum.ACTIVITYFEED,
        SectionEnum.SELF,
      ].includes(globalStore.section) && smallerThanMd
    )
  })
)

const deskTopNodNeedPading = $(
  computed(() => {
    return [
      SectionEnum.MESSENGER,
      SectionEnum.REELS,
      SectionEnum.SEARCH,
      SectionEnum.ACTIVITYFEED,
      SectionEnum.SELF,
    ].includes(globalStore.section)
  })
)
</script>

<template>
  <div>
    <Header />
    <!-- <Extension /> -->
    <div
      :class="[
        'mx-auto w-full overflow-hidden pt-[54px] pb-[60px] dark:text-white sm:overflow-visible md:pt-[84px] lg:w-[935px]',
        {
          '!pt-0 !pb-0': noNeedPadingTop,
        },
        {
          '!pb-0 ': deskTopNodNeedPading,
        },
      ]"
    >
      <slot />
    </div>
    <NavBarBottom v-if="isShowNavBarBottom" />
  </div>
</template>
