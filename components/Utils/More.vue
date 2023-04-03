<script lang="ts" setup>
import Avatar from '@/components/Atoms/Avatar.vue'
import { useLockScroll } from '@/composables'
import { TypeMoreEnum, useMoreStore } from '@/store'
import { onClickOutside } from '@vueuse/core'
import { gsap, Elastic } from 'gsap'
import BackDrop from './BackDrop.vue'
import Button from '../Atoms/Button.vue'

const moreRef = ref<HTMLDivElement>()
const moreStore = useMoreStore()

const type = $computed(() => moreStore.type)

const delFeed = () => {
  if (moreStore.state.feed.id) {
    moreStore.delFeed(moreStore.state.feed.id)
  }
}

const OPTION = {
  feed: [
    { name: 'Edit' },
    { name: 'Delete', cb: delFeed },
    { name: 'Fck' },
    { name: 'Not interesting' },
    { name: 'Save' },
    { name: 'Go to Post' },
    { name: 'Copy link' },
  ],
}

const userFeed = $computed(() => moreStore.state.feed?.user)

const option = $computed(() => {
  if (moreStore.type === TypeMoreEnum.FEED) {
    return OPTION.feed
  }
  return []
})

useLockScroll()

onMounted(() => {
  gsap.to(moreRef.value!, {
    bottom: 0,
    duration: 0.3,
    ease: Elastic.easeOut.config(1, 0.6),
  })
})

onClickOutside(moreRef, () => {
  moreStore.toggle(false)
})
</script>

<template>
  <div class="z-50">
    <BackDrop>
      <div
        ref="moreRef"
        class="fixed -bottom-[100%] right-1/2 z-20 w-[85%] translate-x-1/2 text-[0.8rem] sm:w-[400px]"
      >
        <div
          v-if="type === TypeMoreEnum.FEED"
          class="flex h-[60px] items-center justify-between rounded-[0.8rem] bg-c1/100 px-[20px] backdrop-blur-sm sm:px-[30px]"
        >
          <div class="flex items-center space-x-[20px]">
            <Avatar :url="userFeed?.profile_pic_url" class="!h-[40px] !w-[40px]" />
            <div>
              <AtomsTagName :name="userFeed?.user_name" />
            </div>
          </div>
          <div class="flex items-center space-x-[20px]">
            <Button
              text="Unfollow"
              class="select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
            />
          </div>
        </div>
        <div class="mt-[10px] overflow-hidden rounded-[0.8rem] bg-c1/100 backdrop-blur-sm">
          <div
            v-for="(i, idx) in option"
            :key="idx"
            @click="i.cb"
            class="hover:c18 flex h-[60px] cursor-pointer items-center border-b-[1px] border-black/10 px-[30px] text-fuchsia-400 last:border-b-0"
          >
            {{ i.name }}
          </div>
        </div>
        <div
          class="mt-[10px] flex h-[45px] cursor-pointer items-center justify-center rounded-[0.8rem] bg-c1 px-[30px] backdrop-blur-sm active:bg-blue-300 sm:h-[50px]"
          @click="moreStore.toggle(false)"
        >
          Done
        </div>
      </div>
    </BackDrop>
  </div>
</template>
