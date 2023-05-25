<script setup lang="ts">
import Avatar from '@/components/Atoms/Avatar.vue'
import TagName from '@/components/Atoms/TagName.vue'
import { SizeAvatarEnum } from '@/type'
</script>

<template>
  <article
    class="w-full bg-transparent md:clip-path-cuzknothz dark:md:bg-transparent [&:not(:last-child)]:mb-[24px]"
  >
    <div class="w-full bg-c1 dark:bg-c19 md:clip-path-cuzknothz">
      <div class="h-[60px]">
        <div class="mx-[16px] flex h-full items-center justify-between">
          <div class="flex items-center space-x-[10px] text-[0.8rem]">
            <Avatar :size="SizeAvatarEnum.S" pending />
            <TagName pending />
          </div>
          <div>
            <div class="skeleton h-[30px] w-[30px]"></div>
          </div>
        </div>
      </div>
      <div class="skeleton h-[350px] w-full" />
      <div class="px-[16px]">
        <div class="my-[5px] flex h-[35px] w-full items-center justify-between">
          <div class="flex gap-[12px]">
            <div class="skeleton h-[30px] w-[30px]" v-for="(i, idx) in 3" :key="idx"></div>
          </div>
          <div>
            <div class="skeleton h-[30px] w-[30px]"></div>
          </div>
        </div>
        <TagName pending />
        <div>
          <p v-for="(i, idx) in 3" :key="idx" class="skeleton mb-[5px] h-[18px] w-full"></p>
        </div>
        <p class="skeleton h-[18px] w-[50px]"></p>

        <div class="mt-[10px] flex h-[30px] gap-[10px]">
          <div class="skeleton h-full w-[30px] rounded-[50%]"></div>
          <div class="skeleton flex-1"></div>
          <div class="skeleton h-full w-[30px]"></div>
        </div>
        <div class="h-[30px]"></div>
      </div>
    </div>
  </article>
</template>
