<script setup lang="ts">
import BackDrop from '@/components/Utils/BackDrop.vue'
import { useLockScroll } from '@/composables'
import { ToastTypeEnum, useAddStore, useToastStore } from '@/store'
import { IFilePost, TypePostEnum } from '@/type'
import { formatBytes } from '@/utils'
import { useDropZone, useFileDialog } from '@vueuse/core'
import { nanoid } from 'nanoid'
import Edit from './Edit.vue'
import Slider from '@/components/Organisms/Auth/Common/Slider.vue'
import { ADD_SLIDER } from '@/constants/add'

useLockScroll()
const addStore = useAddStore()
const toastStore = useToastStore()

const step = ref(1)
const typeAdd = $ref(TypePostEnum.FEED)

const dropZoneRef = ref<HTMLDivElement>()

const listFile = ref<IFilePost[]>([])

const pushToFileList = (file: File) => {
  const type = isImageOrVideo(file)
  if (['image', 'video'].includes(type)) {
    const _file = {
      id: nanoid(),
      name: file.name,
      src: URL.createObjectURL(file),
      type,
      size: formatBytes(file.size),
      file,
    }
    listFile.value.push(_file)
    step.value = 2
  } else {
    toastStore.pushTimmer({
      type: ToastTypeEnum.ERROR,
      content: 'Only accept image and video',
    })
  }
}

const onDrop = (files: File[] | null) => {
  files?.forEach((i) => {
    pushToFileList(i)
  })
}
const { files, open } = useFileDialog()
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

watch(files, (val) => {
  if (val) {
    const fileList = Array.from(val)
    fileList.forEach((i) => {
      pushToFileList(i)
    })
  }
})

onBeforeUnmount(() => {
  listFile.value.forEach((i) => {
    URL.revokeObjectURL(i.src)
  })
})
</script>
<template>
  <BackDrop @click.self="addStore.toggle(false)">
    <div
      v-if="step === 1"
      class="flex w-[320px] flex-col justify-center rounded-[10px] bg-white p-[30px_20px_20px_20px]"
    >
      <Slider
        :select="typeAdd"
        :arr="ADD_SLIDER"
        @set="(val) => (typeAdd = val)"
        class="mb-[20px] !w-full"
      />
      <div
        @click="open()"
        ref="dropZoneRef"
        :class="[
          'flex h-[60px] w-full cursor-pointer items-center justify-center rounded-[10px] border-[2px] border-dashed ',
          isOverDropZone ? 'border-c11' : 'border-c17',
        ]"
      >
        <span v-if="!listFile.length">Drag files here or browser</span>
        <span v-else> Drag more file here or browser</span>
      </div>
      <div></div>
    </div>
    <div v-else-if="step === 2">
      <Edit :listFile="listFile" />
    </div>
  </BackDrop>
</template>

