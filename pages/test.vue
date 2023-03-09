<template>
  <div>
    <!-- {{ access }} -->
    <!-- {{}} -->
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~~/store'
import jwt_decode from 'jwt-decode'

const authStore = useAuthStore()

const access = $computed(() => authStore?.data?.token?.access)

watch(
  () => access,
  (val) => {
    console.log('HHJHF', jwt_decode(val))
  },
  { immediate: true }
)
</script>

<style scoped></style>
