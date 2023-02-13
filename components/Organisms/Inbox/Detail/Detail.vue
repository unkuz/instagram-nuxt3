<script setup lang="ts">
import { useAuthStore, useInboxDetailStore } from '@/store'
import Bottom from './Bottom.vue'
import IndividualLine from './IndividualLine.vue'
import Replying from './Replying.vue'
import Avatar from '@/components/Atoms/Avatar.vue'
import BackIcon_ from '@/assets/svg/mingcute/back.svg'
import VideoCallIcon_ from '@/assets/svg/mingcute/video_call.svg'
import CallIcon_ from '@/assets/svg/mingcute/call.svg'
import InfoIcon_ from '@/assets/svg/mingcute/info.svg'

const inboxDetailStore = useInboxDetailStore()
const authStore = useAuthStore()

const isOnline = ref(true)

const containRef = $ref<HTMLDivElement>()
const containListRef = $ref<HTMLDivElement>()

let listMessageObserver: MutationObserver | null = null

const scrollEnd = () => {
  if (containListRef?.lastElementChild) {
    containListRef.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }
}

onMounted(() => {
  scrollEnd()
  listMessageObserver = new MutationObserver(() => scrollEnd())
  listMessageObserver.observe(containListRef!, {
    childList: true,
    subtree: true,
  })
})

onBeforeUnmount(() => {
  listMessageObserver?.disconnect()
})

const list = $computed(() => inboxDetailStore.dataAfterProcees)
const replying = $computed(() => inboxDetailStore.detail.replying)
const currentUser = $computed(() => authStore.data.userName)
</script>

<template>
  <div class="fck relative h-[calc(100vh)] text-[.85rem] md:h-[calc(100vh-84px)]">
    <div class=" " ref="containRef">
      <div
        class="absolute top-0 left-0 right-0 flex h-[60px] w-full items-center justify-between bg-c1 px-[20px] md:px-0 dark:bg-c19"
      >
        <div class="flex items-center gap-[20px]">
          <NuxtLink to="/inbox/"><BackIcon_ /> </NuxtLink>
          <div class="flex gap-[20px]">
            <span class="relative flex items-center justify-center"
              ><NuxtLink to="/cukznothz"
                ><Avatar url="/image/91480011.jpg" class="h-[30px] w-[30px]"
              /></NuxtLink>
              <div
                :class="[
                  'absolute -right-[3px] bottom-[4px] h-[8px] w-[8px] rounded-[50%] bg-c15',
                  isOnline ? 'bg-c15' : 'bg-c21',
                ]"
              ></div>
            </span>
            <div class="flex flex-col">
              <span>cuzknothz</span>
              <span>😹</span>
            </div>
          </div>
        </div>

        <div class="flex gap-[20px] [&__svg]:cursor-pointer items-center">
          <span>
            <VideoCallIcon_ />
          </span>
          <span><CallIcon_ /></span>
          <span><InfoIcon_ /></span>
        </div>
      </div>
      <div
        ref="containListRef"
        class="h-[calc(100vh-60px)] w-full overflow-scroll p-[10px_10px_0px_10px] md:p-[10px_0px_0px_0px] md:h-[calc(100vh-84px-60px)] !pt-[100px]"
      >
        <IndividualLine
          v-for="(i, idx) in list"
          :key="idx"
          :isReply="i.user.full_name !== currentUser"
          :content="i.message"
          :sequent="i.sequent"
        />
        <IndividualLine v-if="replying" :isReply="true">
          <template #special>
            <Replying />
          </template>
        </IndividualLine>
      </div>

      <Bottom />
    </div>
  </div>
</template>
<style>
.fck .haha:nth-child(1) {
  background-color: aqua;
}
</style>
