<script lang="ts" setup>
const isSearchActive = ref(true);
</script>

<template>
  <div
    class="relative flex h-[36px] w-[268px] cursor-text items-center rounded-md bg-gray-200 px-[16px]"
  >
    <svg
      v-show="isSearchActive"
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
      v-show="isSearchActive"
      class="absolute top-1/2 left-[60px] -translate-y-1/2 text-sm"
      >Search</span
    >

    <input type="text" class="bg-transparent focus:outline-none" />
  </div>
</template>
