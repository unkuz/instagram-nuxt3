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

const { width, height } = useResizeWindow();
const isMobileResponsive = ref(true);
const router = useRouter();
console.log({ router });

watchEffect(() => {
  isMobileResponsive.value = width.value < 768 ?? false;
});
const changeRoute = async (path) => {
  console.log({ path });
  await router.push(path);
};

onMounted(() => {
  console.log("W", width.value);
  console.log("H", height.value);
});
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
        <div v-if="!isMobileResponsive" @click="changeRoute('/')">
          <NuxtLink href="/" noRel target="_self">
            <HomeIcon :to="ROUTES.HOME" />
          </NuxtLink>
        </div>
        <div class="ml-[22px] md:ml-0" @click="changeRoute('/direct/inbox/')">
          <NuxtLink href="/direct/inbox/" noRel target="_self">
            <Messenger :isHidden="true" :to="ROUTES.MESSENGER" />
          </NuxtLink>
        </div>
        <NewPost :isHidden="true" />
        <div @click="changeRoute('/explore/')">
          <NuxtLink href="/explore/" noRel target="_self">
            <FindPeople v-if="!isMobileResponsive" :to="ROUTES.EXPLORE" />
          </NuxtLink>
        </div>
        <div class="relative" v-if="!isMobileResponsive">
          <ActivityFeed />
          <!-- <ActivityFeedPop v-if="true" /> -->
        </div>
        <div class="relative mr-0" v-if="!isMobileResponsive">
          <SelfAvatar />

          <!-- <AccountPop v-if="true" /> -->
        </div>
      </div>
    </div>
  </header>
</template>
