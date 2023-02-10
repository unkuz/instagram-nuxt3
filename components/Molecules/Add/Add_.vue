<script lang="ts" setup>
import BackDrop from '@/components/Utils/BackDrop.vue'
import { useClickOutSide, useLockScroll } from '@/composables'
import { SectionEnum } from '@/constants'
import { useAddStore, useGlobalStore, usePostStore } from '@/store'

const postStore = usePostStore()
const addStore = useAddStore()
const globalStore = useGlobalStore()
const inputFileRef = $ref<HTMLInputElement | null>(null)
const containerPreviewRef = $ref<HTMLDivElement>()
const boxRef = ref<HTMLDivElement>()
let startPointX = $ref(0)

const postFiles = $computed<FileList[]>(() => postStore.files)
const listBolbs = computed(() => postStore.listBlobs)
const isHasFile = $computed(() => Array.from(postStore.files).length > 0)

useLockScroll()

const currentImageSlideIdx = computed<number>(() => {
  if (!startPointX) {
    return 0
  } else {
    return -startPointX / 500
  }
})

watch(listBolbs, () => {
  containerPreviewRef!.innerHTML = ''
  listBolbs.value.forEach((i: any) => {
    const image = document.createElement('img')
    image.src = String(i)
    Object.assign(image.style, {
      width: '500px',
      height: '750px',
      objectFit: 'cover',
    })
    containerPreviewRef?.appendChild(image)
  })
})

onMounted(() => {
  inputFileRef?.addEventListener('change', (event) => {
    postStore.setFiles((event.target as HTMLInputElement).files!)
  })
})

onBeforeUnmount(() => {
  postStore.clearFiles()
})

useClickOutSide(boxRef, () => {
  globalStore.setSection(SectionEnum.HOME)
})

const close = () => addStore.toggle(false)

const handleUpload = () => {
  if (inputFileRef) {
    inputFileRef.value = ''
  }
  inputFileRef?.click()
}

const handleSlide = (indicator: 1 | -1) => {
  containerPreviewRef!.style.transform = `translateX(${startPointX + 500 * indicator}px)`
  startPointX += indicator * 500
}
</script>

<template>
  <div>
    <BackDrop @click.self="close">
      <div class="h-[300px] w-[500px] bg-white text-[.8rem]">
        <div class="flex justify-between">
          <div>Post</div>
          <div>Story</div>
          <div>Reel</div>
        </div>
      </div>
    </BackDrop>
  </div>
</template>
