<script setup lang="ts">
import moment from 'moment'
import { useForceRenderTimer } from '@/composables'

const { key } = useForceRenderTimer()

interface IProps {
  time: string
}
defineProps<IProps>()
</script>
<template>
  <div :key="key">{{ moment(time).fromNow() }}</div>
</template>
