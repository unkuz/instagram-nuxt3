<script lang="ts" setup>
import ActivityFeed from '@/components/Atoms/Nav/ActivityFeed.vue'
import HomeIcon from '@/components/Atoms/Nav/HomeIcon.vue'
import Reels from '@/components/Atoms/Nav/Reels.vue'
import Search from '@/components/Atoms/Nav/Search.vue'
import SelfAvatar from '@/components/Atoms/Nav/SelfAvatar.vue'
import { SectionEnum } from '@/constants'
import { useGlobalStore } from '@/store'
import { APP_CONFIGS } from '~~/configs'

const globalStore = useGlobalStore()
const isMobile = $computed(() => globalStore.getIsMobile)
const section = $computed(() => globalStore.section)
const isReelsSelect = $computed(() => globalStore.section === SectionEnum.REELS && isMobile)
const handleSelect = (section: SectionEnum) => {
  globalStore.setSection(section)
}
</script>

<template>
  <div
    :class="[
      'fixed bottom-0 z-10 h-[65px] w-full   bg-c1  dark:bg-c19 md:hidden',
      {
        'border-none bg-c2 [&__svg]:fill-c1 [&__svg]:text-c1': isReelsSelect,
      },
      {
        'backdrop-blur-[5px] bg-c1/50 dark:bg-c2/50': APP_CONFIGS.HEADER_BLUR
      }
    ]"
  >
    <div class="mt-3 flex items-center justify-around">
      <div @click="handleSelect(SectionEnum.HOME)">
        <NuxtLink to="/">
          <HomeIcon :is-select="section === SectionEnum.HOME" />
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/explore/">
          <Search :is-select="[SectionEnum.SEARCH, SectionEnum.FINDPEOPLE].includes(section)" />
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
