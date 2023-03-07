<script lang="ts" setup>
import Login from '@/components/Organisms/Auth/Login/index.vue'
import BgGlass from '@/components/Utils/BgGlass.vue'
definePageMeta({
  layout: 'empty',
})
</script>

<template>
  <div>
    <BgGlass />
    <Login />
  </div>
</template>
