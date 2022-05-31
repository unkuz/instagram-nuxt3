<script lang="ts" setup>
import ActivityFeed from '~~/components/Nav/ActivityFeed.vue'
import HomeIcon from '~~/components/Nav/HomeIcon.vue'
import Search from '~~/components/Nav/Search.vue'
import SelfAvatar from '~~/components/Nav/SelfAvatar.vue'
import { SECTION } from '~~/constants/section'
import { useGlobalStore } from '~~/store/global'
import Reels from '../components/Nav/Reels.vue'

const globalStore = useGlobalStore()
const router = useRouter()
const isMobile = computed(() => globalStore.getIsMobile)
const section = computed(() => globalStore.getSection)
const isReelsSelect = computed(() => globalStore.getSection === SECTION.REELS && isMobile)
const isMoblieAndSelectReels = computed(
  () => globalStore.getIsMobile && globalStore.getSection === SECTION.REELS
)
const handleSelect = (section: SECTION, url?: string) => {
  globalStore.setSection(section)
  router.push(url)
}
</script>

<template>
  <div
    :class="`fixed bottom-0 z-10 h-[65px] w-full border-t-[1px] border-gray-200  ${
      isReelsSelect ? 'bg-black' : 'bg-white'
    } md:hidden`"
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
