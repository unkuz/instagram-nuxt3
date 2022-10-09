<script lang="ts" setup>
import clsx from 'classnames'
import ActivityFeed from '~~/components/Nav/ActivityFeed.vue'
import HomeIcon from '~~/components/Nav/HomeIcon.vue'
import Search from '~~/components/Nav/Search.vue'
import SelfAvatar from '~~/components/Nav/SelfAvatar.vue'
import { SECTION } from '~~/constants/section'
import { useGlobalStore } from '~~/store/global'
import Reels from '../components/Nav/Reels.vue'

const globalStore = useGlobalStore()
const isMobile = computed(() => globalStore.getIsMobile)
const section = computed(() => globalStore.getSection)
const isReelsSelect = computed(() => globalStore.getSection === SECTION.REELS && isMobile)
const handleSelect = (section: SECTION, url?: string) => {
  navigateTo(url)
  globalStore.setSection(section)
}
</script>

<template>
  <div
    :class="
      clsx(
        'fixed bottom-0 z-10 h-[65px] w-full border-t-[1px] border-gray-200 bg-white md:hidden',
        {
          'border-none bg-black': isReelsSelect,
        }
      )
    "
  >
    <div class="mt-3 flex items-center justify-around">
      <div @click="handleSelect(SECTION.HOME, '/')">
        <HomeIcon :isSelect="section === SECTION.HOME" />
      </div>
      <div @click="handleSelect(SECTION.SEARCH, '/explore/')">
        <Search :isSelect="section === SECTION.SEARCH" />
      </div>
      <div @click="handleSelect(SECTION.REELS, '/reels/')">
        <Reels :isSelect="section === SECTION.REELS" />
      </div>
      <div @click="handleSelect(SECTION.ACTIVITYFEED, '/activity-feed')">
        <ActivityFeed :isSelect="section === SECTION.ACTIVITYFEED" />
      </div>
      <div @click="handleSelect(SECTION.SELF, '/cuzknothz/')">
        <SelfAvatar :isSelect="section === SECTION.SELF" />
      </div>
    </div>
  </div>
</template>
