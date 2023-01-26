<script lang="ts" setup>
import AccountPop from '../Huge/AccountPop/index.vue'
import ActivityFeedPop from '../Huge/ActivityFeedPop/index.vue'
import SearchPop from '../Huge/SearchPop/index.vue'
import ActivityFeed from '../Nav/ActivityFeed.vue'
import FindPeople from '../Nav/FindPeople.vue'
import Messenger from '../Nav/Messenger.vue'
import NewPost from '../Nav/NewPost.vue'
import SelfAvatar from '../Nav/SelfAvatar.vue'
import Flashicon_ from '@@/assets/svg/flash_icon.svg'
import LoginIcon_ from '@@/assets/svg/login.svg'
import Logo from '@@/components/Header/Logo.vue'
import Search from '@@/components/Header/Search.vue'
import HomeIcon from '@@/components/Nav/HomeIcon.vue'
import Reels from '@@/components/Nav/Reels.vue'
import { useClickOutSide } from '@@/composables'
import { SectionEnum } from '@@/constants/section'
import { useAuthStore, useGlobalStore, useSearchStore } from '@@/store'
import Extension from '@@/components/Utils/Extension.vue'

const globalStore = useGlobalStore()
const authStore = useAuthStore()
const searchStore = useSearchStore()
const isShowSearchToolkit = $computed(() => searchStore.getIsShowSearchToolkit)
const section = $computed(() => globalStore.section)
const isMobile = $computed<boolean>(() => globalStore.getIsMobile)
const accountPopRef = $ref<HTMLDivElement>()
const activityFeedPopRef = $ref<HTMLDivElement | null>(null)
const extensionRef = ref<HTMLDivElement | null>(null)
const isShowProfile = $ref(false)

let showExtension = $ref(false)

const toggleShowExtension = () => (showExtension = !showExtension)

const isLogin = computed(() => authStore.data.isLogin)

useClickOutSide(extensionRef, () => (showExtension = false))

const handleSelect = (section: SectionEnum) => globalStore.setSection(section)
</script>

<template>
  <header
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
        <!-- <DarkMode /> -->
        <div ref="extensionRef" class="relative">
          <div @click="toggleShowExtension" />
          <div><Extension v-if="showExtension" /></div>
        </div>
      </div>
      <div
        class="relative hidden w-full items-center justify-center md:flex md:w-auto lg:ml-0 lg:w-full"
      >
        <Search />
        <SearchPop v-if="isShowSearchToolkit" />
      </div>
      <div
        v-if="isLogin"
        class="flex h-full w-full flex-row-reverse items-center justify-start space-x-[22px] md:w-auto md:flex-row md:justify-end md:first:mr-6 lg:w-full"
      >
        <div v-show="!isMobile" @click="handleSelect(SectionEnum.HOME)">
          <NuxtLink to="/">
            <HomeIcon :is-select="section === SectionEnum.HOME" />
          </NuxtLink>
        </div>
        <div
          class="ml-[22px] md:ml-0"
          @click="handleSelect(SectionEnum.MESSENGER)"
        >
          <NuxtLink to="/inbox/">
            <Messenger
              :is-select="section === SectionEnum.MESSENGER"
              :has-new="true"
            />
          </NuxtLink>
        </div>
        <div v-show="!isMobile" @click="handleSelect(SectionEnum.REELS)">
          <NuxtLink to="/reels">
            <Reels :is-select="false" />
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
        <div
          v-show="!isMobile"
          class="relative"
          @click="handleSelect(SectionEnum.ACTIVITYFEED)"
        >
          <ActivityFeed :is-select="section === SectionEnum.ACTIVITYFEED" />
          <div ref="activityFeedPopRef">
            <ActivityFeedPop v-show="section === SectionEnum.ACTIVITYFEED" />
          </div>
        </div>
        <div
          v-show="!isMobile"
          class="relative mr-0"
          @click="isShowProfile = true"
        >
          <SelfAvatar :is-select="section === SectionEnum.SELF" />
          <div ref="accountPopRef">
            <AccountPop v-show="isShowProfile" />
          </div>
        </div>
      </div>
      <div v-else class="flex h-full w-full items-center justify-end">
        <NuxtLink to="/login">
          <LoginIcon_ />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
