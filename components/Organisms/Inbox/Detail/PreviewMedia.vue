<script setup lang="ts">
import BackDrop from '@/components/Utils/BackDrop.vue'

interface IProps {
  previewMedia: any
}
defineProps<IProps>()

const emit = defineEmits(['close'])

const close = () => emit('close')
</script>
<template>
  <BackDrop @click.self="close">
    <div class="h-auto max-h-[90vh] w-auto max-w-[80vw] p-[10px] bg-c1">
      <nuxt-img v-if="previewMedia.type === 'image'" :src="previewMedia.src" />
      <video v-if="previewMedia.type === 'video'" :src="previewMedia.src" controls />
    </div>
  </BackDrop>
</template>

