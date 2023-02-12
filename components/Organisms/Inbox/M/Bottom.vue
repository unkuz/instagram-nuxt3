<script setup lang="ts">
import CameraFillIcon_ from '@/assets/svg/mingcute/camera_fill.svg'
import EmojiFillIcon_ from '@/assets/svg/mingcute/emoji_fill.svg'
import LikeFillIcon_ from '@/assets/svg/mingcute/like_fill.svg'
import MicFillIcon_ from '@/assets/svg/mingcute/mic_fill.svg'
import PictureFillIcon_ from '@/assets/svg/mingcute/picture_fill.svg'
import RightFillIcon_ from '@/assets/svg/mingcute/right_fill.svg'
import { useFileDialog, useFocus, useMagicKeys, usePermission } from '@vueuse/core'
import { gsap } from 'gsap'
import Emoji from '@/components/Utils/Emoji.vue'
import { useInboxDetailStore } from '@/store'

let showEmoji = $ref(false)
const emojiRef = ref<HTMLDivElement>()
const inboxDetailStore = useInboxDetailStore()
const aniInputRef = $ref<HTMLSpanElement>()
const inputRef = ref<HTMLInputElement>()
const { focused } = useFocus(inputRef, { initialValue: false })
const { shift, space, a, enter } = useMagicKeys()
let inputValue = $ref('')

const microphoneAccess = usePermission('microphone')
const { files, open: openFileExplorer, reset } = useFileDialog()

watch(enter, async (val) => {
  if (val && focused.value) {
    await inboxDetailStore.reply(inputValue)
    inputValue = ''
  }
})

const record = () => {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.')
    navigator.mediaDevices
      .getUserMedia(
        // constraints - only audio needed for this app
        {
          audio: true,
        }
      )

      // Success callback
      .then((stream) => {})

      // Error callback
      .catch((err) => {
        console.error(`The following getUserMedia error occurred: ${err}`)
      })
  } else {
    console.log('getUserMedia not supported on your browser!')
  }
}

const takePicture = () => {
  const constraints = {
    audio: true,
    video: { width: 1280, height: 720 },
  }

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((mediaStream) => {
      const video = document.querySelector('video')
      //   video.srcObject = mediaStream
      //   video.onloadedmetadata = () => {
      //     video.play()
      //   }
    })
    .catch((err) => {
      // always check for errors at the end.
      console.error(`${err.name}: ${err.message}`)
    })
}

const toggleEmoji = () => (showEmoji = !showEmoji)

const hiddenLeft = $computed(() => {
  return focused.value && inputValue
})

let tl = gsap.timeline({})

watch(focused, (focused) => {
  if (focused) {
    tl.to(aniInputRef!, {
      width: '100%',
      duration: 0.3,
      ease: 'slow(0.7, 0.7, false)',
    })
  } else {
    tl.to(aniInputRef!, {
      width: '0%',
      duration: 0.3,
      ease: 'slow(0.7, 0.7, false)',
    })
  }
})

onBeforeUnmount(() => {
  tl.kill()
})

// onMounted(() => {
//   setInterval(() => {
//     inboxDetailStore.setReplying(Math.random() > 0.9)
//   }, 5000)
// })
// onClickOutside(emojiRef, () => (showEmoji = true))
</script>

<template>
  <div class="">
    <div class="relative" ref="emojiRef">
      <Emoji v-if="showEmoji" :top="-378" class="!left-0" />
    </div>

    <div
      class="absolute bottom-0 right-0 left-0 flex h-[60px] items-center justify-evenly bg-c1 py-[5px] dark:bg-c19 [&__svg]:w-[22px] [&__svg]:cursor-pointer [&__svg]:text-blue-400"
    >
      <template v-if="hiddenLeft"
        ><span><RightFillIcon_ /></span
      ></template>

      <template v-else>
        <span @click="takePicture"><CameraFillIcon_ /></span>
        <span @click="openFileExplorer()"><PictureFillIcon_ /></span>
        <span @click="record"><MicFillIcon_ /></span
      ></template>

      <div
        :class="[
          'relative h-[36px]  overflow-hidden rounded-[18px] border-[1px] border-c4 dark:border-c4/20',
          hiddenLeft ? 'w-[80%]' : 'w-[60%]',
        ]"
      >
        <span ref="aniInputRef" class="absolute h-full w-[0px] bg-c4/50 dark:bg-c4/10"></span>
        <span class="absolute inset-0 px-[10px]"
          ><input
            ref="inputRef"
            v-model="inputValue"
            type="text"
            class="h-full w-[calc(100%-30px)] bg-transparent caret-c7 outline-none active:outline-none"
            :placeholder="focused ? 'Type a message...' : 'Message'"
        /></span>

        <span @click="toggleEmoji" class="absolute right-[10px] bottom-1/2 translate-y-1/2"
          ><EmojiFillIcon_ />
        </span>
      </div>
      <div>
        <LikeFillIcon_ />
      </div>
    </div>
  </div>
</template>
