<template>
  <div>{{ a }}</div>
</template>

<script setup lang="ts">
import moment from 'moment'
const a = moment('Thu Oct 1 2022 17:30:03 GMT+0300').fromNow()
</script>

<style scoped></style>
