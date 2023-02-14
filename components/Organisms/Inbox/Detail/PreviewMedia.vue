<script setup lang="ts">
import BackDrop from '@/components/Utils/BackDrop.vue'

interface IProps {
  previewMedia: any
}
defineProps<IProps>()

const emit = defineEmits(['close'])

const close = emit('close')
</script>
<template>
  <BackDrop>
    <nuxt-img v-if="previewMedia.type === 'image'" :src="previewMedia.src" class="h-[90%] w-auto" />
  </BackDrop>
</template>
