<script setup lang="ts">
import Avatar from '@/components/Atoms/Avatar.vue'
import Button from '@/components/Atoms/Button.vue'
import TagName from '@/components/Atoms/TagName.vue'
import { SizeAvatarEnum } from '@/type'
</script>
<template>
  <div>
    <div class="mb-[22px] mt-[26px] flex h-[56px] items-center justify-between">
      <Avatar :size="SizeAvatarEnum.M" skeleton />
      <div class="-ml-[70px]">
        <TagName skeleton />

        <p class="text-c3 dark:text-c21"></p>
      </div>
      <div>
        <Button class="skeleton h-[31px] w-[63px] !bg-c15 py-[6px] text-[.8rem] text-c1" />
      </div>
    </div>
    <div class="flex h-[11px] items-center justify-between text-sm text-c3 dark:text-c21">
      <div class="skeleton h-[18px] w-[140px]" />
      <div class="skeleton h-[18px] w-[60px] cursor-pointer"></div>
    </div>
    <div class="mt-[8px] h-auto w-full">
      <div
        class="flex h-[48px] items-center justify-between py-[8px]"
        v-for="(i, idx) in 4"
        :index="idx"
      >
        <Avatar :size="SizeAvatarEnum.S" skeleton />
        <div class="w-[185px]">
          <p
            class="skeleton h-[15px] w-[60px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap font-medium"
          ></p>
          <p class="skeleton mt-[2px] h-[15px] w-[130px] text-[0.8rem] text-c3 dark:text-c21"></p>
        </div>
        <div
          class="flex w-[55px] cursor-pointer justify-end text-[0.8rem] font-[500] [&>div]:px-[6px]"
        >
          <Button skeleton class="h-[27px] w-[52px] !bg-c8 !px-[8px] !py-[4px] !text-c9" />
        </div>
      </div>
    </div>
    <div class="mt-[10px] flex flex-col items-center text-[0.85rem] text-c3 dark:text-c21" v-once>
      <div class="skeleton h-[19px] w-[239px]"></div>
      <div class="skeleton mt-[2px] h-[19px] w-[293px]"></div>
    </div>
  </div>
</template>
