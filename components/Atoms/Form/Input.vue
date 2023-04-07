<script setup lang="ts">
interface IProps {
  type: 'text' | 'password'
  modelValue: string
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'password',
})

const emit = defineEmits(['update:modelValue'])

const changeVal = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
<template>
  <div class="">
    <input
      :type="type"
      :value="modelValue"
      @input="changeVal($event)"
      class="h-[40px] w-full rounded-lg bg-c2/10 p-[10px] caret-c17 focus:outline-none dark:bg-c1/20"
    />
  </div>
</template>
