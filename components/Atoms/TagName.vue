<script setup lang="ts">
interface IProps {
  name: string
}

withDefaults(defineProps<IProps>(), {
  name: '',
})
</script>
<template>
  <div
    class="inline-block bg-c2 px-[10px] py-[1px] text-c1 shadow-md dark:bg-c1 dark:text-c2 text-[.875rem]"
  >
    {{ name }}
  </div>
</template>
