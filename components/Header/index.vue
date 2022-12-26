<script lang="ts" setup>
import Logo from '@@/components/Header/Logo.vue'
import Search from '@@/components/Header/Search.vue'
import HomeIcon from '@@/components/Nav/HomeIcon.vue'
import Reels from '@@/components/Nav/Reels.vue'
import { SectionEnum } from '@@/constants/section'
import { useGlobalStore, useSearchStore, useThemeStore } from '@@/store'
import AccountPop from '../Huge/AccountPop/index.vue'
import ActivityFeedPop from '../Huge/ActivityFeedPop/index.vue'
import SearchPop from '../Huge/SearchPop/index.vue'
import ActivityFeed from '../Nav/ActivityFeed.vue'
import FindPeople from '../Nav/FindPeople.vue'
import Messenger from '../Nav/Messenger.vue'
import NewPost from '../Nav/NewPost.vue'
import SelfAvatar from '../Nav/SelfAvatar.vue'
import Extension from '~~/components/Utils/Extension.vue'
import Flashicon_ from '@@/assets/svg/flash_icon.svg'
import { useClickOutSide } from '@@/composables'
import DarkMode from '../Utils/DarkMode.vue'

const globalStore = useGlobalStore()
const searchStore = useSearchStore()
const themeStore = useThemeStore()
const isShowSearchToolkit = computed<boolean>(() => searchStore.getIsShowSearchToolkit)
const section = computed<SectionEnum>(() => globalStore.section)
const isMobile = computed<boolean>(() => globalStore.getIsMobile)
const accountPopRef = ref<HTMLDivElement | null>(null)
const activityFeedPopRef = ref<HTMLDivElement | null>(null)
const extensionRef = ref<HTMLDivElement | null>(null)
const isShowProfile = ref<boolean>(false)

const showExtension = ref<boolean>(false)

const toggleShowExtension = () => {
  showExtension.value = !showExtension.value
}

useClickOutSide(extensionRef, () => (showExtension.value = false))

// useClickOutSide(accountPopRef, () => {
//   isShowProfile.value = false
// })

// useClickOutSide(activityFeedPopRef, () => {
//   isShowProfile.value = false
// })

const handleSelect = (section: SectionEnum) => globalStore.setSection(section)
</script>

<template>
  <header
    class="fixed top-0 left-0 z-10 h-[60px] w-screen border-c4 bg-c1/80 shadow-c4 backdrop-blur-[3px] dark:border-none dark:bg-c19/80 dark:shadow-none md:border-b-[1px] md:shadow-sm"
  >
    <div
      class="mx-[20px] grid h-full grid-cols-2 md:flex md:justify-between lg:mx-auto lg:grid lg:w-[935px] lg:grid-cols-3"
    >
      <div class="flex w-full items-center gap-[22px] md:w-auto lg:w-full">
        <Logo />
        <div @click="toggleShowExtension">
          <Flashicon_ class="cursor-pointer dark:[&>path]:fill-white" />
        </div>
        <DarkMode />
        <div class="relative" ref="extensionRef">
          <div @click="toggleShowExtension"></div>
          <div><Extension v-if="showExtension" /></div>
        </div>
      </div>
      <div
        class="relative hidden w-full items-center justify-center md:ml-[65px] md:flex md:w-auto lg:ml-0 lg:w-full"
      >
        <Search />
        <SearchPop v-if="isShowSearchToolkit" />
      </div>
      <div
        class="flex h-full w-full flex-row-reverse items-center justify-start space-x-[22px] md:w-auto md:flex-row md:justify-end md:first:mr-6 lg:w-full"
      >
        <div v-show="!isMobile" @click="handleSelect(SectionEnum.HOME)">
          <NuxtLink to="/">
            <HomeIcon :isSelect="section === SectionEnum.HOME" />
          </NuxtLink>
        </div>
        <div class="ml-[22px] md:ml-0" @click="handleSelect(SectionEnum.MESSENGER)">
          <NuxtLink to="/inbox/">
            <Messenger :isSelect="section === SectionEnum.MESSENGER" :hasNew="true" />
          </NuxtLink>
        </div>
        <div v-show="!isMobile" @click="handleSelect(SectionEnum.REELS)">
          <NuxtLink to="/reels">
            <Reels :isSelect="false" />
          </NuxtLink>
        </div>
        <div @click="handleSelect(SectionEnum.NEW_POST)" class="relative">
          <NewPost :isSelect="section === SectionEnum.NEW_POST" />
        </div>
        <div v-show="!isMobile" @click="handleSelect(SectionEnum.FINDPEOPLE)">
          <NuxtLink to="/explore/">
            <FindPeople :isSelect="section === SectionEnum.FINDPEOPLE" />
          </NuxtLink>
        </div>
        <div v-show="!isMobile" class="relative" @click="handleSelect(SectionEnum.ACTIVITYFEED)">
          <ActivityFeed :isSelect="section === SectionEnum.ACTIVITYFEED" />
          <div ref="activityFeedPopRef">
            <ActivityFeedPop v-show="section === SectionEnum.ACTIVITYFEED" />
          </div>
        </div>
        <div v-show="!isMobile" class="relative mr-0" @click="isShowProfile = true">
          <SelfAvatar :isSelect="section === SectionEnum.SELF" />
          <div ref="accountPopRef">
            <AccountPop v-show="isShowProfile" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
