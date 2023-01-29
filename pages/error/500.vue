<template>
  <div class="flex h-[calc(100vh-84px)] w-full items-center justify-center text-[0.9rem]">
    Oops Something went wrong. (╯°□°）╯︵ ┻━┻.
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  error: Object,
})
const handleError = () => clearError({ redirect: '/' })
</script>
