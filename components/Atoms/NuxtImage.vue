<script setup lang="ts">
import { APP_CONFIGS } from '@/configs'

interface IProps {
  src: string
  quality?: number
  loading?: string
  alt?: string
}

withDefaults(defineProps<IProps>(), {
  src: APP_CONFIGS.DEFAULT_IMAGE_ERROR,
  quality: 100,
  loading: 'lazy',
  alt: '',
})
</script>
<template>
  <div class="h-full w-full">
    <nuxt-img
      :src="src"
      :class="['h-full w-full object-cover']"
      :loading="loading"
      :quality="quality"
      :alt="alt"
    />
  </div>
</template>
