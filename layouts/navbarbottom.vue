<script lang="ts" setup>
import ActivityFeed from '@@/components/Nav/ActivityFeed.vue'
import HomeIcon from '@@/components/Nav/HomeIcon.vue'
import Reels from '@@/components/Nav/Reels.vue'
import Search from '@@/components/Nav/Search.vue'
import SelfAvatar from '@@/components/Nav/SelfAvatar.vue'
import { SECTION } from '@@/constants'
import { useGlobalStore } from '@@/store'
import clsx from 'classnames'

const globalStore = useGlobalStore()
const isMobile = computed(() => globalStore.getIsMobile)
const section = computed(() => globalStore.section)
const isReelsSelect = computed(() => globalStore.section === SECTION.REELS && isMobile)
const handleSelect = (section: SECTION) => {
  globalStore.setSection(section)
}
</script>

<template>
  <div
    :class="
      clsx(
        'fixed bottom-0 z-10 h-[65px] w-full border-t-[1px] border-c4 bg-c1 md:hidden',
        {
          'border-none bg-c2': isReelsSelect,
        }
      )
    "
  >
    <div class="mt-3 flex items-center justify-around">
      <div @click="handleSelect(SECTION.HOME)">
        <NuxtLink to="/">
          <HomeIcon :isSelect="section === SECTION.HOME" />
        </NuxtLink>
      </div>
      <div @click="handleSelect(SECTION.SEARCH)">
        <NuxtLink to="/explore/">
          <Search :isSelect="section === SECTION.SEARCH" />
        </NuxtLink>
      </div>
      <div @click="handleSelect(SECTION.REELS)">
        <NuxtLink to="/reels/">
          <Reels :isSelect="section === SECTION.REELS" />
        </NuxtLink>
      </div>
      <div @click="handleSelect(SECTION.ACTIVITYFEED)">
        <NuxtLink to="/activity-feed">
          <ActivityFeed :isSelect="section === SECTION.ACTIVITYFEED" />
        </NuxtLink>
      </div>
      <div @click="handleSelect(SECTION.SELF)">
        <NuxtLink to="/cuzknothz/">
          <SelfAvatar :isSelect="section === SECTION.SELF" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
