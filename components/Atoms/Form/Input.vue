<script setup lang="ts">
interface IProps {
  type: 'text' | 'password'
}

withDefaults(defineProps<IProps>(), {
  type: 'password',
})

const modelValue = defineModel<string>()
</script>
<template>
  <div class="">
    <input
      v-model="modelValue"
      class="h-[40px] w-full rounded-lg bg-c2/10 p-[10px] caret-c17 focus:outline-none dark:bg-c1/20"
    />
  </div>
</template>
