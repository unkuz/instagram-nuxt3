<script lang="ts" setup>
import { useOnline } from '@vueuse/core'

const router = useRouter()
const online = useOnline()
const routerclg = () => {}
</script>

<template>
  <p @click="routerclg">{{ online }}</p>
</template>
