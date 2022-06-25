<script lang="ts" setup>
import { useOnline } from '@vueuse/core'

const online = useOnline()
</script>

<template>{{ online }}</template>
