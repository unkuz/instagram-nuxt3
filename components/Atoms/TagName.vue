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
    class="inline-block bg-c2 px-[8px] md:py-[1px] py-[2px] text-c1 shadow-md dark:bg-c1 dark:text-c2 md:text-[.875rem] text-[.8rem]"
  >
    {{ name }}
  </div>
</template>
