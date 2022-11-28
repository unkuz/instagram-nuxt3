<script setup lang="ts">
interface IProps {
  text: string
  className?: string
}

defineProps<IProps>()

const emit = defineEmits(['click'])
</script>
<template>
  <div
    @click="emit('click')"
    :class="`inline-block cursor-pointer rounded-[10px] bg-blue-100 py-[3px] px-[10px] ${className}`"
  >
    <span>{{ text }}</span>
  </div>
</template>
