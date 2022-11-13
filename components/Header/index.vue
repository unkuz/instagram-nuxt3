<script lang="ts" setup>
import Logo from '@@/components/Header/Logo.vue'
import Search from '@@/components/Header/Search.vue'
import HomeIcon from '@@/components/Nav/HomeIcon.vue'
import Reels from '@@/components/Nav/Reels.vue'
import { SECTION } from '@@/constants/section'
import { useGlobalStore, useSearchStore } from '@@/store'
import AccountPop from '../Huge/AccountPop/index.vue'
import ActivityFeedPop from '../Huge/ActivityFeedPop/index.vue'
import SearchPop from '../Huge/SearchPop/index.vue'
import ActivityFeed from '../Nav/ActivityFeed.vue'
import FindPeople from '../Nav/FindPeople.vue'
import Messenger from '../Nav/Messenger.vue'
import NewPost from '../Nav/NewPost.vue'
import SelfAvatar from '../Nav/SelfAvatar.vue'

const globalStore = useGlobalStore()
const searchStore = useSearchStore()
const isShowSearchToolkit = computed<boolean>(() => searchStore.getIsShowSearchToolkit)
const section = computed<SECTION>(() => globalStore.getSection)
const isMobile = computed<boolean>(() => globalStore.getIsMobile)

const handleSelect = (section: SECTION) => {
    globalStore.setSection(section)
}
const isShowProfile = ref<boolean>(false)
</script>

<template>
    <header
        class="fixed top-0 z-10 h-[60px] w-screen border-0 border-gray-200 bg-white shadow-gray-200 md:border-b-[1px] md:shadow-sm">
        <div
            class="mx-[20px] grid h-full grid-cols-2 md:flex md:justify-between lg:mx-auto lg:grid lg:w-[935px] lg:grid-cols-3">
            <div class="flex w-full items-center md:w-auto lg:w-full">
                <Logo />
            </div>
            <div
                class="relative hidden w-full items-center justify-center md:ml-[65px] md:flex md:w-auto lg:ml-0 lg:w-full">
                <Search />
                <SearchPop v-if="isShowSearchToolkit" />
            </div>
            <div
                class="flex h-full w-full flex-row-reverse items-center justify-start space-x-[22px] md:w-auto md:flex-row md:justify-end md:first:mr-6 lg:w-full">
                <div v-show="!isMobile" @click="handleSelect(SECTION.HOME)">
                    <NuxtLink to="/">
                        <HomeIcon :isSelect="section === SECTION.HOME" />
                    </NuxtLink>
                </div>
                <div class="ml-[22px] md:ml-0" @click="handleSelect(SECTION.MESSENGER)">
                    <NuxtLink to="/direct/inbox/">
                        <Messenger :isSelect="section === SECTION.MESSENGER" :hasNew="true" />
                    </NuxtLink>
                </div>
                <div v-show="!isMobile" @click="handleSelect(SECTION.REELS)">
                    <NuxtLink to="/reels">
                        <Reels :isSelect="false" />
                    </NuxtLink>
                </div>
                <div @click="handleSelect(SECTION.NEW_POST)" class="relative">
                    <NewPost :isSelect="section === SECTION.NEW_POST" />
                </div>
                <div v-show="!isMobile" @click="handleSelect(SECTION.FINDPEOPLE)">
                    <NuxtLink to="/explore/">
                        <FindPeople :isSelect="section === SECTION.FINDPEOPLE" />
                    </NuxtLink>
                </div>
                <div v-show="!isMobile" class="relative" @click="handleSelect(SECTION.ACTIVITYFEED)">
                    <ActivityFeed :isSelect="section === SECTION.ACTIVITYFEED" />
                    <ActivityFeedPop v-show="section === SECTION.ACTIVITYFEED" />
                </div>
                <div v-show="!isMobile" class="relative mr-0" @click="isShowProfile = !isShowProfile">
                    <SelfAvatar :isSelect="section === SECTION.SELF" />
                    <AccountPop v-show="isShowProfile" />
                </div>
            </div>
        </div>
    </header>
</template>
