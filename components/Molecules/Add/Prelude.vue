<script setup lang="ts">
import BackDrop from '@/components/Utils/BackDrop.vue'
import { useFileDialog } from '@vueuse/core'
import { ToastTypeEnum, useAddStore, useToastStore } from '~~/store'
import { useDropZone } from '@vueuse/core'
import { useLockScroll } from '@/composables'
import { nanoid } from 'nanoid'
import { formatBytes } from '@/utils'

useLockScroll()
const addStore = useAddStore()
const toastStore = useToastStore()

const { files, open, reset } = useFileDialog()

const dropZoneRef = ref<HTMLDivElement>()

interface IFile {
  name: string
  src: string
  type: string
  size: string
}
const listFile = ref<IFile[]>([])

const pushToFileList = (file: File) => {
  const type = isImageOrVideo(file)
  if (['image', 'video'].includes(type)) {
    const _file = {
      id: nanoid(),
      name: file.name,
      src: URL.createObjectURL(file),
      type: type,
      size: formatBytes(file.size),
    }
    listFile.value.push(_file)
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
      class="flex w-[320px] flex-col justify-center rounded-[10px] bg-white p-[30px_20px_20px_20px]"
    >
      <div
        :class="[
          'mb-[20px] flex w-full  items-center font-[600] duration-100',
          listFile.length ? 'justify-between' : 'justify-center',
        ]"
      >
        <div>Upload File</div>
        <AtomsButton
          v-if="listFile.length"
          text="Next"
          class="select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
        />
      </div>

      <div class="max-h-[200px] w-full overflow-scroll mb-[10px]">
        <div v-for="i in listFile" class="h-[40px] w-full line-clamp-1">
          <div v-if="i.type === 'video'" class="flex w-full items-center gap-[10px]">
            <div class="relative !h-[30px] !w-[30px] min-w-[30px]">
              <video :src="i.src" class="h-full w-full object-cover" />
              <div class="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>play_fill</title>
                  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Media" transform="translate(-912.000000, -48.000000)">
                      <g id="play_fill" transform="translate(912.000000, 48.000000)">
                        <path
                          d="M5.66861,4.76019 C5.78724,3.78065 6.80341,3.19555 7.70988,3.58326 C8.77068,4.03697 11.151,5.11563 14.1712,6.85935 C17.1921,8.60347 19.3167,10.1258 20.2396,10.8174 C21.028,11.4082 21.0303,12.5803 20.2411,13.1729 C19.3266,13.8596 17.2277,15.3637 14.1701,17.129 C11.1115,18.8949 8.75886,19.9607 7.70749,20.4091 C6.80076,20.7957 5.78729,20.2095 5.66885,19.232 C5.53051,18.0902 5.27335,15.4973 5.27335,11.9951 C5.27335,8.49493 5.53021,5.90304 5.66861,4.76019 Z"
                          id="路径"
                          fill="white"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <span class="w-[calc(100%-30px)]"
              ><p class="w-full line-clamp-1">{{ i.name }}</p>
              <p class="w-full line-clamp-1 text-[.8rem] text-c17">{{ i.size }}</p></span
            >
          </div>
          <div v-else-if="i.type === 'image'" class="flex w-full items-center gap-[10px]">
            <div class="!h-[30px] !w-[30px] min-w-[30px]">
              <img :src="i.src" class="h-full w-full object-cover" />
            </div>
            <span class="w-[calc(100%-30px)]"
              ><p class="w-full line-clamp-1">{{ i.name }}</p>
              <p class="w-full line-clamp-1 text-[.8rem] text-c17">{{ i.size }}</p>
            </span>
          </div>
        </div>
      </div>
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
      <div></div></div
  ></BackDrop>
</template>
