<script lang="ts" setup>
import MoreIcon_ from '~~/assets/svg/more_icon.svg'
import { useMoreStore } from '~~/store/more'

interface IProps {
  profile_pic_url: string
  username: string
}
defineProps<IProps>()

const moreStore = useMoreStore()
const showMore = () => {
  moreStore.setShow()
}
</script>

<template>
  <div class="h-[60px]">
    <div class="mx-[16px] flex h-full items-center justify-between">
      <div class="flex items-center space-x-[10px] text-[0.8rem]">
        <div
          class="aspect-square h-[32px] w-[32px] cursor-pointer select-none rounded-full border-[1px] border-gray-200"
        >
          <img class="rounded-full object-cover" :src="profile_pic_url" />
        </div>
        <div class="cursor-pointer">{{ username }}</div>
      </div>
      <div>
        <MoreIcon_ @click="showMore" />
      </div>
    </div>
  </div>
</template>
