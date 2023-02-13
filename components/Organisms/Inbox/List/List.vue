<script setup lang="ts">
import SearchInbox from './SearchInbox.vue'
import ListUser from '@/components/Organisms/Inbox/List/ListUser.vue'
</script>

<template>
  <div class="mx-auto w-full text-[.85rem] md:w-[390px]">
    <div class="h-[700px]  md:h-[calc(100vh-84px-24px)]">
      <div class="flex h-[60px] items-center md:hidden">BACK</div>
      <div
        class="relative flex h-[45px] w-full cursor-text items-center rounded-md bg-c4/50 px-[16px] dark:bg-c23/50"
      >
        <svg
          width="16"
          height="16"
          fill="#8e8e8e"
          aria-label="Search"
          class="_8-yf5 [&amp;>path]:stroke-black [&amp;>path]:dark:stroke-white"
          color="#8e8e8e"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5zM16.511 16.511 22 22"
          ></path></svg
        ><span class="absolute top-1/2 left-[45px] -translate-y-1/2 text-sm dark:text-c1"
          >Search</span
        ><input
          type="text"
          class="absolute top-1/2 left-1/2 h-[30px] w-[90%] w-[72%] -translate-x-1/2 -translate-y-1/2 bg-transparent text-sm caret-c7 focus:outline-none"
        />
      </div>
      <ListUser />
      <div class="h-[500px] overflow-scroll">
        <div v-for="i in 10" class="flex w-full items-center rounded-3xl hover:bg-black/50 p-[10px] justify-between">
          <div class="flex items-center gap-[10px]">
            <div class="h-[60px] w-[60px] rounded-[50%] bg-fuchsia-200"></div>
            <div class="flex flex-col">
              <span>cuzknothz</span>
              <span>🙄😶😶😑</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span>0.22</span>
            <span>djsfkaj</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
