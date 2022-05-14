<script lang="ts" setup>
import { useClickOutSide } from "~~/composables/useClickOutSide";
const isSearchActive = ref(false);
const searchRef = ref(null);
const inputSearch = ref(null);
const searchValue = ref("");

const setActiveSearchInput = () => {
  isSearchActive.value = true;
};
const closeSearch = (e: MouseEvent) => {
  e.stopPropagation();
  searchValue.value = "";
  isSearchActive.value = false;
};

watch(isSearchActive, (state, prev) => {
  isSearchActive.value ? inputSearch.value.focus() : "";
});
</script>

<template>
  <div
    ref="searchRef"
    @click="setActiveSearchInput"
    class="relative flex h-[36px] w-[268px] cursor-text items-center rounded-md bg-gray-200 px-[16px]"
  >
    <svg
      v-show="!isSearchActive"
      aria-label="Search"
      class="_8-yf5"
      color="#8e8e8e"
      fill="#8e8e8e"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <path
        d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="16.511"
        x2="22"
        y1="16.511"
        y2="22"
      ></line>
    </svg>

    <span
      v-show="!isSearchActive"
      class="absolute top-1/2 left-[60px] -translate-y-1/2 text-sm"
      >Search</span
    >

    <input
      type="text"
      ref="inputSearch"
      v-model="searchValue"
      class="absolute top-1/2 left-1/2 h-[30px] w-[236px] -translate-x-1/2 -translate-y-1/2 bg-transparent focus:outline-none"
    />
    <div
      class="absolute right-3 cursor-pointer"
      v-show="isSearchActive"
      @click="closeSearch"
    >
      <div class="relative h-[18px] w-[18px] rounded-full bg-gray-600">
        <div
          class="absolute top-1/2 left-1/2 h-[8px] w-[2px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 h-[8px] w-[2px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white"
        ></div>
      </div>
    </div>
  </div>
</template>
