<script setup lang="ts">
import NuxtImageCustom from '@/components/Atoms/NuxtImage.vue'
import { BASE_URL_API } from '@/apis'

interface IProps {
  src: string
}

defineProps<IProps>()
</script>
<template>
  <div class="aspect-square h-full w-full bg-yellow-500">
    <NuxtImageCustom :src="src" />
  </div>
</template>
