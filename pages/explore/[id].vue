<script setup lang="ts">
import BackDrop from '@/components/Utils/BackDrop.vue'
definePageMeta({
  middleware: 'auth',
})
defineEmits(['close'])

const close = () => navigateTo('/explore')
</script>

<template>
  <div>
    <BackDrop @click.self="close"></BackDrop>
  </div>
</template>
