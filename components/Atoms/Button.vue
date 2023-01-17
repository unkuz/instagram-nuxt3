<script setup lang="ts">
interface IProps {
  text?: string
}

withDefaults(defineProps<IProps>(), {
  text: '',
})

const emit = defineEmits(['click'])
</script>
<template>
  <div
    @click="emit('click')"
    class="inline-block cursor-pointer rounded-[10px] bg-c5 py-[3px] px-[10px]"
  >
    <span>{{ text }}</span>
  </div>
</template>

