<script setup lang="ts">
import Cookie from '@/components/Utils/Cookie.vue'
import More from '@/components/Utils/More.vue'
import Add_ from '~~/components/Molecules/Add/index.vue'
import { useAddStore, useMoreStore } from '~~/store'

const addStore = useAddStore()
const moreStore = useMoreStore()
</script>

<template>
  <div>
    <Add_ v-if="addStore.isShow" />
    <More v-if="moreStore.isShow" />
    <Cookie />
  </div>
</template>
