<script setup lang="ts">
import { useForceRenderTimer } from '@/composables'
import moment from 'moment'

const { key } = useForceRenderTimer()

interface IProps {
  time: string
}
defineProps<IProps>()
</script>
<template>
  <div :key="key">{{ moment(time).fromNow() }}</div>
</template>
