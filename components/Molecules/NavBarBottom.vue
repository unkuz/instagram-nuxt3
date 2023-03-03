<script lang="ts" setup>
import ActivityFeed from '@/components/Atoms/Nav/ActivityFeed.vue'
import HomeIcon from '@/components/Atoms/Nav/HomeIcon.vue'
import Reels from '@/components/Atoms/Nav/Reels.vue'
import Search from '@/components/Atoms/Nav/Search.vue'
import SelfAvatar from '@/components/Atoms/Nav/SelfAvatar.vue'
import { SectionEnum } from '@/constants'
import { useAuthStore, useGlobalStore } from '@/store'
import { APP_CONFIGS } from '@/configs'

const globalStore = useGlobalStore()
const authStore = useAuthStore()
const userName = $computed(() => authStore.data.user?.user_name)

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
        'border-none bg-c19 dark:bg-c19 [&__svg]:fill-c1 [&__svg]:text-c1': isReelsSelect,
        'bg-c1/50 !backdrop-blur-[5px]  dark:bg-c19/50': APP_CONFIGS.HEADER_BLUR,
        '!bg-c19 !backdrop-blur-[5px] dark:!bg-c19': APP_CONFIGS.HEADER_BLUR && isReelsSelect,
      },
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
        <NuxtLink :to="`/${userName}/`">
          <SelfAvatar :is-select="section === SectionEnum.SELF" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
