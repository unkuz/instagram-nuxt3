<script setup lang="ts">
interface IProps {
  text: string
  count: number
}
defineProps<IProps>()
</script>

<template>
  <div class="flex w-[60px] cursor-pointer flex-col items-center md:w-[100px]">
    <span class="">{{ count }}</span>
    <div class="capitalize">{{ text }}</div>
  </div>
</template>
