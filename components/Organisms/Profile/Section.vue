<script setup lang="ts">
interface IProps {
  text: string
  count: number
}
defineProps<IProps>()
</script>

<template>
  <div class="flex cursor-pointer flex-col items-center">
    <span class="">{{ count }}</span>
    <div class="capitalize">{{ text }}</div>
  </div>
</template>
