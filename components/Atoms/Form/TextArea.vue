<script setup lang="ts">
const modelValue = defineModel<string>()
</script>
<template>
  <div class="">
    <textarea
      v-model="modelValue"
      rows="5"
      class="w-full rounded-lg bg-c2/10 p-[10px] caret-c17 focus:outline-none dark:bg-c1/20"
    />
  </div>
</template>
