<script setup lang="ts">
interface IProps {
  name: string
}

withDefaults(defineProps<IProps>(), {
  name: '',
})
</script>
<template>
  <p
    v-if="name.trim()"
    class="inline-block bg-c2 px-[8px] py-[4px] text-[.8rem] leading-[.8rem] text-c1 shadow-md dark:bg-c1 dark:text-c2 md:py-[4px] md:text-[.875rem] md:leading-[.875rem]"
  >
    {{ name.trim() }}
  </p>
</template>
