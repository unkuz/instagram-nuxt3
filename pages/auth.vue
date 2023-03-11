<script lang="ts" setup>
import BgGlass from '@/components/Utils/BgGlass.vue'
import Auth from '@/components/Organisms/Auth/index.vue'

definePageMeta({
  auth: false,
  layout: 'empty',
})
</script>

<template>
  <div>
    <BgGlass class="!opacity-50" />
    <Auth />
  </div>
</template>
