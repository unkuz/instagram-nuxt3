<script setup lang="ts">
interface IProps {
  modelValue: string
}

defineProps<IProps>()


const emit = defineEmits(['update:modelValue'])

const changeVal = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
<template>
  <div class="">
    <textarea
      :value="modelValue"
      @input="changeVal($event)"
      rows="5"
      class="w-full rounded-lg bg-c2/10 p-[10px] caret-c17 focus:outline-none dark:bg-c1/20"
    />
  </div>
</template>
