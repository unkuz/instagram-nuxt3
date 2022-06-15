<script lang="ts" setup>
import BackDrop from '~~/components/Utils/BackDrop.vue'
import { useClickOutSide } from '~~/composables/useClickOutSide'
import { useLockScroll } from '~~/composables/useLockScroll'
import { SECTION } from '~~/constants/section'
import { useGlobalStore } from '~~/store/global'
import { usePostStore } from '~~/store/post'

const postStore = usePostStore()
const inputFileRef = ref(null)
const containerPreviewRef = ref(null)
const boxRef = ref(null)
const globalStore = useGlobalStore()

const postFiles = computed(() => postStore.getFiles)
const listBolbs = computed(() => postStore.getBlobs)
const isHasFile = computed(() => Array.from(postFiles.value).length > 0)

watch(listBolbs, () => {
  containerPreviewRef.value.innerHTML = ''
  listBolbs.value.forEach((i: Blob) => {
    const image = document.createElement('img')
    image.src = String(i)
    image.style.width = '100%'
    image.style.height = '100%'
    containerPreviewRef.value.appendChild(image)
  })
})

onMounted(() => {
  inputFileRef.value.addEventListener('change', (event) => {
    console.log('FILES', event.target.files)
    postStore.setFiles(event.target.files)
  })
})

onUnmounted(() => {
  postStore.clearFiles()
})

useLockScroll()
useClickOutSide(boxRef, () => {
  globalStore.setSection(SECTION.HOME)
})

const closePostBox = () => {
  globalStore.setSection(SECTION.HOME)
}

const handle = (idx) => {
  idx === 1
    ? (containerPreviewRef.value.style.transform = `translateX(${
        (containerPreviewRef.value.style.transform
          ? Number(containerPreviewRef.value.style.transform.slice(0, -2))
          : 0) +
        500 +
        'px'
      })`)
    : (containerPreviewRef.value.style.transform = `translateX(${
        (containerPreviewRef.value.style.transform
          ? Number(containerPreviewRef.value.style.transform.slice(0, -2))
          : 0) -
        500 +
        'px'
      })`)
}

const handleUpload = () => {
  inputFileRef.value.value = null
  inputFileRef.value.click()
}
</script>

<template>
  <div class="z-50 h-screen w-full">
    <input type="file" multiple hidden ref="inputFileRef" accept=".jpg, .jpeg, .png" />
    <BackDrop />
    <div
      ref="boxRef"
      class="absolute top-1/2 right-1/2 z-10 flex translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-xl border-[1px] border-gray-300"
    >
      <div
        :class="`relative  ${
          isHasFile ? 'w-[500px]' : 'w-[300px]'
        }  bg-white text-[0.9rem] duration-1000`"
      >
        <div class="absolute right-[12px] top-[12px]">
          <div class="relative h-[18px] w-[18px] rounded-full bg-gray-600" @click="closePostBox">
            <div
              class="absolute top-1/2 left-1/2 h-[8px] w-[2px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"
            ></div>
            <div
              class="absolute top-1/2 left-1/2 h-[8px] w-[2px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white"
            ></div>
          </div>
        </div>
        <div
          class="flex h-[42px] w-full items-center justify-center border-b-[1px] border-gray-300"
        >
          Create new post
        </div>
        <!-- <textarea v-show="isHasFile" class="w-full" />
        <span data-lexical-text="true">asdfdsfaa</span> -->
        <div class="relative">
          <div @click="handle(1)" class="absolute left-0 z-10 text-white">previous</div>
          <div @click="handle(-1)" class="absolute right-0 z-10 text-white">next</div>
          <div
            class="absolute bottom-[15px] left-1/2 z-10 flex -translate-x-1/2 justify-between space-x-[4px]"
          >
            <div v-for="i in postFiles" class="h-[6px] w-[6px] rounded-[50%] bg-white"></div>
          </div>
          <div
            v-show="isHasFile"
            class="flex max-h-[750px] items-center overflow-x-scroll bg-black duration-500"
            ref="containerPreviewRef"
          ></div>
        </div>
        <div
          @click="handleUpload"
          :class="`flex ${
            isHasFile
              ? 'absolute bottom-[20px] right-[20px] flex aspect-square h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[50%] bg-black/20'
              : 'h-[200px] w-full flex-col items-center justify-center space-x-[10px] border-t-0 border-gray-300'
          }`"
        >
          <svg
            v-if="isHasFile"
            aria-label="Open Media Gallery"
            class="_ab6-"
            color="#ffffff"
            fill="#ffffff"
            height="16"
            role="img"
            viewBox="0 0 24 24"
            width="16"
          >
            <path
              d="M19 15V5a4.004 4.004 0 00-4-4H5a4.004 4.004 0 00-4 4v10a4.004 4.004 0 004 4h10a4.004 4.004 0 004-4zM3 15V5a2.002 2.002 0 012-2h10a2.002 2.002 0 012 2v10a2.002 2.002 0 01-2 2H5a2.002 2.002 0 01-2-2zm18.862-8.773A.501.501 0 0021 6.57v8.431a6 6 0 01-6 6H6.58a.504.504 0 00-.35.863A3.944 3.944 0 009 23h6a8 8 0 008-8V9a3.95 3.95 0 00-1.138-2.773z"
              fill-rule="evenodd"
            ></path>
          </svg>

          <svg
            v-if="!isHasFile"
            aria-label="Icon to represent media such as images or videos"
            color="#262626"
            fill="#262626"
            height="77"
            role="img"
            viewBox="0 0 97.6 77.3"
            width="96"
          >
            <path
              d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
              fill="currentColor"
            ></path>
            <path
              d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
              fill="currentColor"
            ></path>
            <path
              d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
              fill="currentColor"
            ></path>
          </svg>
          <span v-if="!isHasFile">Drag photos and videos here</span>
        </div>
      </div>
    </div>
  </div>
</template>
