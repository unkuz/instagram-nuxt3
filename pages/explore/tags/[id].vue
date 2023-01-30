<template>
  <div>TAGS {{ tag }}</div>
</template>

<script setup lang="ts">
const router = useRouter()

const tag = router.currentRoute.value.params.id
</script>
