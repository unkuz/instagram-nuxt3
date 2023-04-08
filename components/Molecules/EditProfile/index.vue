<script setup lang="ts">
import { useProfileStore } from '@/store'

const profileStore = useProfileStore()

const profile = $computed(() => profileStore.data)
</script>
<template></template>
