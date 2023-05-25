<script setup lang="ts">
const router = useRouter()

const back = () => router.back()
</script>
<template>
  <div @click="back">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"
      />
    </svg>
  </div>
</template>
