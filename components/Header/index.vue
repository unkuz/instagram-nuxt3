<script lang="ts" setup>
import Search from "~~/components/Header/Search.vue";
import Logo from "~~/components/Header/Logo.vue";
import HomeIcon from "~~/components/Nav/HomeIcon.vue";
import Messenger from "../Nav/Messenger.vue";
import NewPost from "../Nav/NewPost.vue";
import FindPeople from "../Nav/FindPeople.vue";
import ActivityFeed from "../Nav/ActivityFeed.vue";
import SelfAvatar from "../Nav/SelfAvatar.vue";
import { useResizeWindow } from "~~/composables/useResizeWindow";
import { ROUTES } from "~~/constants/routes";
import ActivityFeedPop from "../Huge/ActivityFeedPop/index.vue";
import AccountPop from "../Huge/AccountPop/index.vue";
import SearchPop from "../Huge/SearchPop/index.vue";
import { useTransition } from "~~/store/transition";

const { width } = useResizeWindow();
const router = useRouter();
const transition = useTransition();
const isMobileResponsive = ref(true);
const isShowAccountPop = ref(false);
const isShowActivityFeed = ref(false);

watchEffect(() => {
  isMobileResponsive.value = width.value < 768 ?? false;
});
const handleAccountPop = () => {
  isShowAccountPop.value = !isShowAccountPop.value;
};
const handleActivityFeed = () => {
  isShowActivityFeed.value = !isShowActivityFeed.value;
};
const redirect = (url) => {
  transition.setPrepare();
  setTimeout(() => {
    router.push(url);
  }, 1000);
  setTimeout(() => {
    transition.cancelPrepare();
  }, 2000);
};
</script>

<template>
  <header
    class="fixed top-0 z-10 h-[60px] w-full border-0 border-gray-200 bg-white shadow-gray-200 sm:border-b-[1px] sm:shadow-sm"
  >
    <div
      class="mx-[20px] grid h-full grid-cols-2 md:flex md:justify-between lg:mx-auto lg:grid lg:w-[935px] lg:grid-cols-3"
    >
      <div class="flex w-full items-center md:w-auto lg:w-full">
        <Logo />
      </div>
      <div
        class="relative hidden w-full items-center justify-center md:flex md:w-auto lg:w-full"
      >
        <Search />
        <SearchPop v-if="true" />
      </div>
      <div
        class="flex h-full w-full flex-row-reverse items-center justify-start space-x-[22px] md:w-auto md:flex-row md:justify-end md:first:mr-6 lg:w-full"
      >
        <div v-if="!isMobileResponsive" @click="redirect('/')">
          <!-- <NuxtLink href="/" noRel target="_self"> -->
          <HomeIcon :to="ROUTES.HOME" />
          <!-- </NuxtLink> -->
        </div>
        <div class="ml-[22px] md:ml-0" @click="redirect('/direct/inbox/')">
          <!-- <NuxtLink href="/direct/inbox/" noRel target="_self"> -->
          <Messenger :isHidden="true" :to="ROUTES.MESSENGER" />
          <!-- </NuxtLink> -->
        </div>
        <NewPost :isHidden="true" />
        <div @click="redirect('/explore/')">
          <!-- <NuxtLink href="/explore/" noRel target="_self"> -->
          <FindPeople v-if="!isMobileResponsive" :to="ROUTES.EXPLORE" />
          <!-- </NuxtLink> -->
        </div>
        <div
          class="relative"
          v-if="!isMobileResponsive"
          @click="handleActivityFeed"
        >
          <ActivityFeed />
          <ActivityFeedPop v-if="isShowActivityFeed" />
        </div>
        <div
          class="relative mr-0"
          v-if="!isMobileResponsive"
          @click="handleAccountPop"
        >
          <SelfAvatar />

          <AccountPop v-if="isShowAccountPop" />
        </div>
      </div>
    </div>
  </header>
</template>
