<script setup lang="ts">
interface IProps {
  text?: string
  skeleton?: boolean
}

withDefaults(defineProps<IProps>(), {
  text: '',
  skeleton: false,
})

const emit = defineEmits(['click'])
</script>
<template>
  <button
    :class="[
      'inline-block cursor-pointer rounded-[10px] bg-c5 px-[10px] py-[3px] active:bg-c17',
      { 'skeleton ': skeleton },
    ]"
    @click="emit('click')"
  >
    <span>{{ skeleton ? '' : text }}</span>
  </button>
</template>
