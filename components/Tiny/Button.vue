<template>
  <div :class="`rounded-[10px] bg-blue-100 py-[3px] px-[10px] ${className}`">
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  text: string
  className?: string
}

defineProps<IProps>()
</script>
