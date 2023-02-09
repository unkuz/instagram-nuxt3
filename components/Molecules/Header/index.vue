<script lang="ts" setup>
import Flashicon_ from '@/assets/svg/flash_icon.svg'
import Logo from '@/components/Molecules/Header/Logo.vue'
import Search from '@/components/Molecules/Header/Search.vue'
import AccountPop from '@/components/Huge/AccountPop/index.vue'
import ActivityFeedPop from '@/components/Huge/ActivityFeedPop/index.vue'
import SearchPop from '@/components/Huge/SearchPop/index.vue'
import ActivityFeed from '@/components/Atoms/Nav/ActivityFeed.vue'
import FindPeople from '@/components/Atoms/Nav/FindPeople.vue'
import HomeIcon from '@/components/Atoms/Nav/HomeIcon.vue'
import Messenger from '@/components/Atoms/Nav/Messenger.vue'
import NewPost from '@/components/Atoms/Nav/NewPost.vue'
import Reels from '@/components/Atoms/Nav/Reels.vue'
import SelfAvatar from '@/components/Atoms/Nav/SelfAvatar.vue'
import Extension from '@/components/Utils/Extension.vue'
import { useClickOutSide } from '@/composables'
import { SectionEnum } from '@/constants/section'
import { useAuthStore, useGlobalStore, useSearchStore } from '@/store'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import TopBarExplore from '@/components/Organisms/Explore/M/TopBar.vue'
import TopBarReel from '@/components/Organisms/Reel/M/TopBar.vue'

const globalStore = useGlobalStore()
const authStore = useAuthStore()
const searchStore = useSearchStore()
const isShowSearchToolkit = $computed(() => searchStore.getIsShowSearchToolkit)
const section = $computed(() => globalStore.section)
const isMobile = $computed<boolean>(() => globalStore.getIsMobile)
const accountPopRef = $ref<HTMLDivElement>()
const activityFeedPopRef = $ref<HTMLDivElement>()
const extensionRef = ref<HTMLDivElement>()
const isShowProfile = $ref(false)

const breakpoints = useBreakpoints(breakpointsTailwind)
const smallerThanMd = $(breakpoints.smallerOrEqual('md'))

let showExtension = $ref(false)

const toggleShowExtension = () => (showExtension = !showExtension)

useClickOutSide(extensionRef, () => (showExtension = false))

const handleSelect = (section: SectionEnum) => globalStore.setSection(section)

const hiddenHeader = $(
  computed(() => {
    return (
      [
        SectionEnum.MESSENGER,
        SectionEnum.REELS,
        SectionEnum.SEARCH,
        SectionEnum.ACTIVITYFEED,
        SectionEnum.SELF,
        SectionEnum.FINDPEOPLE,
      ].includes(globalStore.section) && smallerThanMd
    )
  })
)
</script>

<template>
  <div>
    <header
      v-if="!hiddenHeader"
      class="fixed top-0 left-0 z-10 h-[60px] w-screen border-c4 bg-c1 dark:border-none dark:bg-c19 md:border-b-[1px]"
    >
      <div
        class="mx-[20px] grid h-full grid-cols-2 md:flex md:justify-between lg:mx-auto lg:grid lg:w-[935px] lg:grid-cols-3"
      >
        <div class="flex w-full items-center gap-[22px] md:w-auto lg:w-full">
          <Logo />
          <div @click="toggleShowExtension">
            <Flashicon_ class="cursor-pointer dark:[&>path]:fill-white" />
          </div>
          <div ref="extensionRef" class="relative">
            <div @click="toggleShowExtension" />
            <div><Extension v-if="showExtension" /></div>
          </div>
        </div>
        <div class="relative hidden w-full items-center justify-center md:flex md:w-auto lg:ml-0 lg:w-full">
          <Search />
          <SearchPop v-if="isShowSearchToolkit" />
        </div>
        <div
          class="flex h-full w-full flex-row-reverse items-center justify-start space-x-[22px] md:w-auto md:flex-row md:justify-end md:first:mr-6 lg:w-full"
        >
          <div v-show="!isMobile" @click="handleSelect(SectionEnum.HOME)">
            <NuxtLink to="/">
              <HomeIcon :is-select="section === SectionEnum.HOME" />
            </NuxtLink>
          </div>
          <div class="ml-[22px] md:ml-0" @click="handleSelect(SectionEnum.MESSENGER)">
            <NuxtLink to="/inbox/">
              <Messenger :is-select="section === SectionEnum.MESSENGER" :has-new="true" />
            </NuxtLink>
          </div>
          <div v-show="!isMobile" @click="handleSelect(SectionEnum.REELS)">
            <NuxtLink to="/reels">
              <Reels :is-select="section === SectionEnum.REELS" />
            </NuxtLink>
          </div>
          <div class="relative" @click="handleSelect(SectionEnum.NEW_POST)">
            <NewPost :is-select="section === SectionEnum.NEW_POST" />
          </div>
          <div v-show="!isMobile" @click="handleSelect(SectionEnum.FINDPEOPLE)">
            <NuxtLink to="/explore/">
              <FindPeople :is-select="section === SectionEnum.FINDPEOPLE" />
            </NuxtLink>
          </div>
          <div v-show="!isMobile" class="relative" @click="handleSelect(SectionEnum.ACTIVITYFEED)">
            <NuxtLink to="/activity-feed/">
              <ActivityFeed :is-select="section === SectionEnum.ACTIVITYFEED" />
            </NuxtLink>
          </div>
          <div v-show="!isMobile" class="relative mr-0" @click="isShowProfile = true">
            <SelfAvatar :is-select="section === SectionEnum.SELF" />
            <div ref="accountPopRef">
              <AccountPop v-show="isShowProfile" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <div v-else>
      <TopBarExplore v-if="section === SectionEnum.FINDPEOPLE" />
      <TopBarReel v-if="section === SectionEnum.REELS" />
    </div>
  </div>
</template>
