<script lang="ts" setup>
import HeroPagelet from "~~/components/HeroPagelet/index.vue";
import Post from "~~/components/Post/index.vue";
import { useWindowResizeCallback } from "~~/composables/useWindowResizeCallback";
useHead({
  titleTemplate: "Instagram",
  meta: [{ name: "description", content: "My amazing site." }],
});

const mainRef = ref(null);
const leftSectionRef = ref(null);
const rightSectionRef = ref(null);
const hell = ref(null);

onBeforeMount(() => {
  return "";
});
onMounted(() => {
  rightSectionRef.value.style.left = `${
    leftSectionRef.value.offsetLeft + 935 - 293
  }px`;
});

useWindowResizeCallback(() => {
  rightSectionRef.value.style.left = `${
    leftSectionRef.value.offsetLeft + 935 - 293
  }px`;
});
</script>

<template>
  <div ref="hell">
    <Head>
      <Title>{{ "Instagram" }}</Title>
    </Head>
    <div ref="mainRef" class="flex w-full justify-center lg:block">
      <div
        class="inline-flex w-full flex-col items-center md:w-[614px] lg:block"
        ref="leftSectionRef"
      >
        <HeroPagelet />
        <div v-for="i in Array.from(Array(5).keys())" :key="i">
          <Post />
        </div>
      </div>
      <div
        class="b fixed top-[84px] hidden h-[473px] w-[293px] bg-white text-sm lg:block"
        ref="rightSectionRef"
      >
        <!-- avatar -->
        <div
          class="mt-[18px] mb-[22px] flex h-[56px] items-center justify-between"
        >
          <div
            class="aspect-square w-[56px] rounded-full bg-red-200 object-cover"
          >
            <img
              crossorigin="anonymous"
              data-testid="user-avatar"
              draggable="false"
              class="rounded-full sm:hover:cursor-pointer"
              src="/image/avatar.jpg"
            />
          </div>
          <div class="-ml-[70px]">
            <p class="font-medium">cuzknothz</p>
            <p class="text-gray-600">cuzknothz</p>
          </div>
          <div class="text-[#1da0f6]">Switch</div>
        </div>

        <!-- suggest for u text -->
        <div
          class="flex h-[11px] items-center justify-between text-sm text-gray-600"
        >
          <div class="text-gray-600">Suggestions for you</div>
          <div>See All</div>
        </div>
        <!-- list -->
        <div class="mt-[8px] w-full">
          <div class="flex h-[48px] items-center justify-between py-[8px]">
            <div
              class="aspect-square w-[32px] rounded-full bg-red-200 object-cover"
            >
              <img
                crossorigin="anonymous"
                data-testid="user-avatar"
                draggable="false"
                class="rounded-full sm:hover:cursor-pointer"
                src="/image/avatar.jpg"
              />
            </div>
            <div class="-ml-[70px]">
              <p class="font-medium">cuzknothz</p>
              <p class="text-gray-600">Suggested for you</p>
            </div>
            <div class="text-[#1da0f6]">Follow</div>
          </div>
          <div class="flex h-[48px] items-center justify-between py-[8px]">
            <div
              class="aspect-square w-[32px] rounded-full bg-red-200 object-cover"
            >
              <img
                crossorigin="anonymous"
                data-testid="user-avatar"
                draggable="false"
                class="rounded-full sm:hover:cursor-pointer"
                src="/image/avatar.jpg"
              />
            </div>
            <div class="-ml-[70px]">
              <p class="font-medium">cuzknothz</p>
              <p class="text-gray-600">Suggested for you</p>
            </div>
            <div class="text-[#1da0f6]">Follow</div>
          </div>
          <div class="flex h-[48px] items-center justify-between py-[8px]">
            <div
              class="aspect-square w-[32px] rounded-full bg-red-200 object-cover"
            >
              <img
                crossorigin="anonymous"
                data-testid="user-avatar"
                draggable="false"
                class="rounded-full sm:hover:cursor-pointer"
                src="/image/avatar.jpg"
              />
            </div>
            <div class="-ml-[70px]">
              <p class="font-medium">cuzknothz</p>
              <p class="text-gray-600">Suggested for you</p>
            </div>
            <div class="text-[#1da0f6]">Follow</div>
          </div>
          <div class="flex h-[48px] items-center justify-between py-[8px]">
            <div
              class="aspect-square w-[32px] rounded-full bg-red-200 object-cover"
            >
              <img
                crossorigin="anonymous"
                data-testid="user-avatar"
                draggable="false"
                class="rounded-full sm:hover:cursor-pointer"
                src="/image/avatar.jpg"
              />
            </div>
            <div class="-ml-[70px]">
              <p class="font-medium">cuzknothz</p>
              <p class="text-gray-600">Suggested for you</p>
            </div>
            <div class="text-[#1da0f6]">Follow</div>
          </div>
          <div class="flex h-[48px] items-center justify-between py-[8px]">
            <div
              class="aspect-square w-[32px] rounded-full bg-red-200 object-cover"
            >
              <img
                crossorigin="anonymous"
                data-testid="user-avatar"
                draggable="false"
                class="rounded-full sm:hover:cursor-pointer"
                src="/image/avatar.jpg"
              />
            </div>
            <div class="-ml-[70px]">
              <p class="font-medium">cuzknothz</p>
              <p class="text-gray-600">Suggested for you</p>
            </div>
            <div class="text-[#1da0f6]">Follow</div>
          </div>
          <div class="flex h-[48px] items-center justify-between py-[8px]">
            <div
              class="aspect-square w-[32px] rounded-full bg-red-200 object-cover"
            >
              <img
                crossorigin="anonymous"
                data-testid="user-avatar"
                draggable="false"
                class="rounded-full sm:hover:cursor-pointer"
                src="/image/avatar.jpg"
              />
            </div>
            <div class="-ml-[70px]">
              <p class="font-medium">cuzknothz</p>
              <p class="text-gray-600">Suggested for you</p>
            </div>
            <div class="text-[#1da0f6]">Follow</div>
          </div>
        </div>
        <div class="text-gray-600">
          <span class="after:content-['.']">About</span>
          <span class="after:content-['.']">Help</span>
          <span class="after:content-['.']">Press</span>
          <span class="after:content-['.']">API</span>
          <span class="after:content-['.']">Jobs</span>
          <span>Privacy Terms</span>
        </div>
        <div class="mb-[16px] text-gray-600">
          <span class="after:content-['.']">Location</span>
          <span class="after:content-['.']">Top accounts</span>
          <span class="after:content-['.']">Hashtags</span>
          <span>Language</span>
        </div>
        <div class="text-gray-200">© 2022 Instagram from Cuzknothz</div>
      </div>
    </div>
  </div>
</template>
