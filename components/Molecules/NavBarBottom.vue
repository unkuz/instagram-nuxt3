<script lang="ts" setup>
import ActivityFeed from '@@/components/Atoms/Nav/ActivityFeed.vue'
import HomeIcon from '@@/components/Atoms/Nav/HomeIcon.vue'
import Reels from '@@/components/Atoms/Nav/Reels.vue'
import Search from '@@/components/Atoms/Nav/Search.vue'
import SelfAvatar from '@@/components/Atoms/Nav/SelfAvatar.vue'
import { SectionEnum } from '@@/constants'
import { useGlobalStore } from '@@/store'

const globalStore = useGlobalStore()
const isMobile = computed(() => globalStore.getIsMobile)
const section = computed(() => globalStore.section)
const isReelsSelect = computed(
  () => globalStore.section === SectionEnum.REELS && isMobile
)
const handleSelect = (section: SectionEnum) => {
  globalStore.setSection(section)
}
</script>

<template>
  <div
    :class="[
      'fixed bottom-0 z-10 h-[65px] w-full border-t-[1px] border-c4 bg-c1 dark:border-none dark:bg-c2 md:hidden',
      {
        'border-none bg-c2': isReelsSelect,
      },
    ]"
  >
    <div class="mt-3 flex items-center justify-around">
      <div @click="handleSelect(SectionEnum.HOME)">
        <NuxtLink to="/">
          <HomeIcon :is-select="section === SectionEnum.HOME" />
        </NuxtLink>
      </div>
      <div @click="handleSelect(SectionEnum.SEARCH)">
        <NuxtLink to="/explore/">
          <Search :is-select="section === SectionEnum.SEARCH" />
        </NuxtLink>
      </div>
      <div @click="handleSelect(SectionEnum.REELS)">
        <NuxtLink to="/reels/">
          <Reels :is-select="section === SectionEnum.REELS" />
        </NuxtLink>
      </div>
      <div @click="handleSelect(SectionEnum.ACTIVITYFEED)">
        <NuxtLink to="/activity-feed">
          <ActivityFeed :is-select="section === SectionEnum.ACTIVITYFEED" />
        </NuxtLink>
      </div>
      <div @click="handleSelect(SectionEnum.SELF)">
        <NuxtLink to="/cuzknothz/">
          <SelfAvatar :is-select="section === SectionEnum.SELF" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
