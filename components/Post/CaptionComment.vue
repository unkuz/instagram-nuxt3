<script lang="ts" setup>
import moment from 'moment'
import Button from '../Tiny/Button.vue'

interface IProps {
  like_count: number
  caption_text: string
  comments: any
  created_at: any
  user: any
}

defineProps<IProps>()
</script>

<template>
  <div>
    <div class="mb-[5px] flex h-[18px] cursor-pointer gap-[5px] text-[0.85rem]">
      <span class="text-red-400"
        ><span>{{ like_count }}</span> likes</span
      >
      <span>|</span>
      <span class="text-fuchsia-400">
        <span>{{ comments.length }}</span> comments</span
      >
    </div>
    <div class="inline-block bg-gray-500 px-[10px] py-[1px] font-[500] text-white">
      {{ user.username }}
    </div>
    <div class="mt-[5px] bg-gray-100/60 py-[5px]">
      <div>{{ caption_text }}</div>
      <div class="mt-[5px] flex gap-[8px]">
        <Button
          text="#nuxt3"
          className="text-[0.8rem] !px-[7px]    !bg-fuchsia-400 shadow-md shadow-fuchsia-400/40"
        />
        <Button
          text="#vue3"
          className="text-[0.8rem] !px-[7px]   !bg-gray-300 shadow-gray-300/40"
        />
        <Button
          text="#django"
          className="text-[0.8rem] !px-[7px]   !bg-yellow-200 shadow-yellow-200/40"
        />
        <Button
          text="#reactJS"
          className="text-[0.8rem] !px-[7px]   !bg-blue-300 shadow-blue-300/40"
        />
      </div>
    </div>

    <div class="m-[8px_0px_5px_0px] h-[18px] text-[0.8rem] text-gray-400">
      {{ moment('Thu Oct 1 2022 17:30:03 GMT+0300').fromNow() }}
    </div>
  </div>
</template>
