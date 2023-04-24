<script setup lang="ts">
import NuxtImageCustom from '@/components/Atoms/NuxtImage.vue'

interface IProps {
  pending?: boolean
  src: string
}

withDefaults(defineProps<IProps>(), {
  pending: false,
})
</script>
<template>
  <div :class="['relative h-[140px] md:h-[200px]', { 'skeleton ': pending }]">
    <NuxtImageCustom
      class="absolute h-full w-full cursor-pointer bg-cover bg-center object-cover"
      :src="src"
    />
  </div>
</template>
