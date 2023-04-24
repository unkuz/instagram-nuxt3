<script setup lang="ts">
interface IProps {
  src: string
  id: string
}

defineProps<IProps>()
</script>
<template>
  <div class="aspect-[1/1.5] h-full w-full">
    <video :src="src" class="h-full w-full object-cover" />
  </div>
</template>
