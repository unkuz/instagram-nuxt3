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
    <div class="mb-[8px] h-[18px] cursor-pointer font-medium text-red-400">
      {{ like_count }} likes
    </div>
    <div class="mb-[4px]">
      <p class="overflow-hidden text-ellipsis">
        <span class="font-medium">
          <span class="inline-block bg-gray-500 px-[10px] py-[1px] font-[500] text-white">{{
            user.username
          }}</span></span
        >
        {{ caption_text }}
      </p>
    </div>
    <div class="mt-[10px] flex gap-[5px]">
      <Button
        text="#nuxt3"
        className="text-[0.8rem] !px-[7px]  !py-[2px] !bg-fuchsia-400 !rounded-[12px]"
      />
      <Button
        text="#vue3"
        className="text-[0.8rem] !px-[7px]  !py-[2px] !bg-gray-300 !rounded-[12px]"
      />
      <Button
        text="#django"
        className="text-[0.8rem] !px-[7px]  !py-[2px] !bg-yellow-200 !rounded-[12px]"
      />
      <Button
        text="#reactJS"
        className="text-[0.8rem] !px-[7px]  !py-[2px] !bg-blue-300 !rounded-[12px]"
      />
    </div>
    <div class="m-[15px_0px_5px_0px] h-[18px] text-[0.8rem] text-gray-400">
      {{ moment('Thu Oct 1 2022 17:30:03 GMT+0300').fromNow() }}
    </div>
  </div>
</template>
