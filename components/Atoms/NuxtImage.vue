<script setup lang="ts">
import { APP_CONFIGS } from '@/configs'
interface IProps {
  src: string
}

withDefaults(defineProps<IProps>(), {
  src: APP_CONFIGS.DEFAULT_IMAGE_ERROR,
})
</script>
<template>
  <div class="w-full h-full"><nuxt-img :src="src" :class="['h-full w-full object-cover']" /></div>
</template>
