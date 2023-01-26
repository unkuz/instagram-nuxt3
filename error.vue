<template>
  <div
    class="flex h-[calc(100vh-84px)] w-full items-center justify-center text-[0.9rem]"
  >
    <span @click="handleError">Oops Something went wrong. (╯°□°）╯︵ ┻━┻.</span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  error: Object,
})
const handleError = () => clearError({ redirect: '/' })
</script>
