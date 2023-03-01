<script lang="ts" setup>
import BackDrop from '@/components/Utils/BackDrop.vue'
import { useAddStore, useGlobalStore } from '@/store'
import { useDropZone, useFileDialog } from '@vueuse/core'

const addStore = useAddStore()
const { files, open, reset } = useFileDialog()
const dropZoneRef = ref<HTMLDivElement>()

const onDrop = (files: File[] | null) => {
  console.log('FILE', files)
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

const close = () => addStore.toggle(false)
</script>

<template>
  <div>
    <BackDrop @click.self="close">
      <div
        @click="open()"
        ref="dropZoneRef"
        :class="[
          'h-[300px] w-[500px] bg-white text-[.8rem]',
          {
            'border-[5px] border-fuchsia-200': isOverDropZone,
          },
        ]"
      >
        <div class="flex justify-between">
          <div>Post</div>
          <div>Story</div>
          <div>Reel</div>
        </div>
      </div>
    </BackDrop>
  </div>
</template>
