<script setup lang="ts">
import ErrorPage from './components/Utils/ErrorPage.vue'

const props = defineProps({
  error: Object,
})
const handleError = () => clearError({ redirect: '/' })
</script>
<template>
  <div class="flex h-[100vh] w-screen items-center justify-center text-[0.85rem]">
    <ErrorPage />
  </div>
</template>
