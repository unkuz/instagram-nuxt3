<script lang="ts" setup>
import Flashicon_ from '@/assets/svg/flash_icon.svg'
import ActivityFeed from '@/components/Atoms/Nav/ActivityFeed.vue'
import FindPeople from '@/components/Atoms/Nav/FindPeople.vue'
import HomeIcon from '@/components/Atoms/Nav/HomeIcon.vue'
import Messenger from '@/components/Atoms/Nav/Messenger.vue'
import NewPost from '@/components/Atoms/Nav/NewPost.vue'
import Reels from '@/components/Atoms/Nav/Reels.vue'
import SelfAvatar from '@/components/Atoms/Nav/SelfAvatar.vue'
import AccountPop from '@/components/Huge/AccountPop/index.vue'
import SearchPop from '@/components/Huge/SearchPop/index.vue'
import Logo from '@/components/Molecules/Header/Logo.vue'
import Search from '@/components/Molecules/Header/Search.vue'
import TopBarExplore from '@/components/Organisms/Explore/M/TopBar.vue'
import TopBarReel from '@/components/Organisms/Reel/M/TopBar.vue'
import Extension from '@/components/Utils/Extension.vue'
import { useTailwindBreakPoint } from '@/composables'
import { SectionEnum } from '@/constants/section'
import { useAddStore, useAuthStore, useGlobalStore, useSearchStore } from '@/store'
import { onClickOutside } from '@vueuse/core'
import { APP_CONFIGS } from '@/configs'

const globalStore = useGlobalStore()
const addStore = useAddStore()
const authStore = useAuthStore()
const searchStore = useSearchStore()
const isShowSearchToolkit = $computed(() => searchStore.getIsShowSearchToolkit)
const section = $computed(() => globalStore.section)
const isMobile = $computed<boolean>(() => globalStore.getIsMobile)
const accountPopRef = ref<HTMLDivElement>()
const activityFeedPopRef = $ref<HTMLDivElement>()
const extensionRef = ref<HTMLDivElement>()
let isShowProfile = $ref(false)

const { smallMd } = $(useTailwindBreakPoint())

let showExtension = $ref(false)

const toggleShowExtension = () => (showExtension = !showExtension)

onClickOutside(extensionRef, () => (showExtension = false))

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
      ].includes(globalStore.section) && smallMd
    )
  })
)

const onAdd = () => {
  globalStore.setSection(SectionEnum.NEW_POST)
  addStore.toggle(true)
}

onClickOutside(accountPopRef, () => (isShowProfile = false))
</script>

<template>
  <ClientOnly>
    <header
      v-if="!hiddenHeader"
      :class="[
        'fixed left-0 top-0 z-10 h-[60px] w-screen  bg-c1 backdrop-blur-[5px]  dark:bg-c19 ',
        {
          'bg-c1/50 backdrop-blur-[5px] dark:bg-c19/50': APP_CONFIGS.HEADER_BLUR,
        },
        {
          'border-none': smallMd && APP_CONFIGS.HEADER_BLUR,
        },
      ]"
    >
      <div
        class="mx-[20px] grid h-full grid-cols-2 border-c4 dark:border-none md:flex md:justify-between md:border-b-[1px] lg:mx-auto lg:grid lg:w-[935px] lg:grid-cols-3"
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
        <div
          class="relative hidden w-full items-center justify-center md:flex md:w-auto lg:ml-0 lg:w-full"
        >
          <Search />
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
          <div class="relative" @click="onAdd">
            <NewPost :is-select="addStore.isShow" />
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
            <SelfAvatar
              :is-select="section === SectionEnum.SELF"
              @click="isShowProfile = !isShowProfile"
            />
            <div ref="accountPopRef">
              <AccountPop v-show="isShowProfile" />
            </div>
          </div>
        </div>
      </div>
    </header>
  </ClientOnly>
</template>
