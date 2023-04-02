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
import TagName from '@/components/Atoms/TagName.vue'
import { gsap } from 'gsap'
import PreviewMedia from './PreviewMedia.vue'
import { useTailwindBreakPoint } from '@/composables'
import { useDropZone } from '@vueuse/core'

const inboxDetailStore = useInboxDetailStore()

let previewMedia = ref({
  type: 'image',
  src: '/image/56893748fgasdf.jpg',
  isShow: false,
})
const authStore = useAuthStore()

const isOnline = ref(true)

const inboxRef = ref<HTMLDivElement>()

const containRef = $ref<HTMLDivElement>()
const containListRef = $ref<HTMLDivElement>()

const { smallMd } = useTailwindBreakPoint()

let listMessageObserver: MutationObserver | null = null

const scrollEnd = () => {
  if (containListRef?.lastElementChild) {
    containListRef.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }
}

onMounted(() => {
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
const currentUser = $computed(() => authStore.data.user.user_name)

const data = $computed(() => inboxDetailStore.data)

let tl = gsap.timeline({})

onMounted(() => {
  tl.to(inboxRef.value!, {
    width: 'auto',
    duration: smallMd.value ? 0.05 : 0.5,
    ease: 'bounce.out',
  }).then(() => {
    scrollEnd()
  })
})

onBeforeUnmount(() => {
  tl.kill()
})

const setPreview = (val: { type: string; src: string }) => {
  const { type, src } = val
  previewMedia.value = {
    isShow: true,
    type,
    src,
  }
}
const onDrop = (files: File[] | null) => {
  // called when files are dropped on zone
}
const { isOverDropZone } = useDropZone(inboxRef, onDrop)
</script>

<template>
  <div
    ref="inboxRef"
    class="relative mx-auto h-[calc(100vh)] text-[.85rem] md:h-[calc(100vh-84px)] md:w-[300px] [&__path]:fill-c17"
  >
    <div ref="containRef">
      <div
        class="absolute left-0 right-0 top-0 flex h-[60px] w-full items-center justify-between bg-c1 px-[10px] dark:bg-c19 md:px-0"
      >
        <div class="flex items-center gap-[20px]">
          <NuxtLink to="/inbox/"><BackIcon_ /></NuxtLink>
          <div class="flex gap-[20px]">
            <span class="relative flex items-center justify-center"
              ><NuxtLink :to="`/${data?.recipient?.user_name}/`"
                ><Avatar :url="data?.recipient?.profile_pic_url" class="h-[40px] w-[40px]"
              /></NuxtLink>
              <div
                :class="[
                  'absolute -right-[3px] bottom-[4px] h-[8px] w-[8px] rounded-[50%] bg-c15',
                  isOnline ? 'bg-c15' : 'bg-c21',
                ]"
              ></div>
            </span>
            <div class="flex flex-col">
              <TagName name="cuzknothz" />
              <span>🥕</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-[20px] [&__svg]:cursor-pointer">
          <span>
            <VideoCallIcon_ />
          </span>
          <span><CallIcon_ /></span>
          <span><InfoIcon_ /></span>
        </div>
      </div>
      <div
        ref="containListRef"
        class="h-[calc(100vh-60px)] w-full overflow-scroll p-[10px_10px_0px_10px] !pt-[100px] scrollbar-hide md:h-[calc(100vh-84px-60px)] md:p-[10px_0px_0px_0px]"
      >
        <IndividualLine
          v-for="(i, idx) in list"
          :key="idx"
          :isReply="i?.user?.user_name !== currentUser"
          :sequent="i?.sequent"
          :avatar="i?.user?.profile_pic_url"
        >
          <template #text>
            {{ i.content }}
          </template>
          <!-- <template v-if="i.message.type === 'image'" #image>
            <div class="flex flex-wrap gap-[10px]">
              <nuxt-img
                v-for="(j, idx) in i.message.content"
                :key="idx"
                class="h-[100px] w-auto cursor-pointer rounded-[10px] bg-c2 object-contain"
                :src="j.src"
                quality="50"
                @click="setPreview({ type: 'image', src: j.src })"
              />
            </div>
          </template> -->
          <!-- <template v-if="i.message.type === 'video'" #video>
            <video
              v-for="(k, idx) in i.message.content"
              :key="idx"
              class="h-[100px] w-auto rounded-[10px] bg-c2 object-contain"
              :src="k.src"
              @click="setPreview({ type: 'video', src: k.src })"
            />
          </template> -->
        </IndividualLine>
        <IndividualLine v-if="replying" :isReply="true">
          <template #special>
            <Replying />
          </template>
        </IndividualLine>
      </div>

      <PreviewMedia
        v-if="previewMedia.isShow"
        :previewMedia="previewMedia"
        @close="previewMedia.isShow = false"
      />

      <Bottom :id="data.id" />
    </div>
  </div>
</template>
