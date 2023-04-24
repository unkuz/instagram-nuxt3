<script setup lang="ts">
interface IProps {
  text?: string
  count?: number | string
  pending?: boolean
}
withDefaults(defineProps<IProps>(), {
  pending: false,
  text: '',
  count: '',
})
</script>

<template>
  <div class="flex w-[60px] cursor-pointer flex-col items-center md:w-[100px]">
    <span :class="['', { 'skeleton ': pending }]">{{ count }}</span>
    <div :class="['capitalize', { 'skeleton ': pending }]">{{ text }}</div>
  </div>
</template>
