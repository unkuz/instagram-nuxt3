<script setup lang="ts">
import NuxtImageCustom from '@/components/Atoms/NuxtImage.vue'
import BackDrop from '@/components/Utils/BackDrop.vue'

interface IProps {
  previewMedia: any
}
defineProps<IProps>()
</script>
<template>
  <BackDrop @click.self="$emit('close')">
    <div class="h-auto max-h-[90vh] w-auto max-w-[80vw] bg-c1 p-[10px]">
      <NuxtImageCustom v-if="previewMedia.type === 'image'" :src="previewMedia.src" />
      <video v-if="previewMedia.type === 'video'" :src="previewMedia.src" controls />
    </div>
  </BackDrop>
</template>
