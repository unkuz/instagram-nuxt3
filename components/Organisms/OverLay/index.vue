<script setup lang="ts">
import Cookie from '@/components/Utils/Cookie.vue'
import More from '@/components/Utils/More.vue'
import Add_ from '@/components/Molecules/Add/Prelude.vue'
import { useAddStore, useMoreStore } from '@/store'
import Toast from '@/components/Utils/Toast.vue'
const addStore = useAddStore()
const moreStore = useMoreStore()

const route = useRoute()

console.log(route.path)

const isAuthPage = $computed(() => _isEqual(route.path, '/auth'))
</script>

<template>
  <div>
    <Add_ v-if="addStore.isShow" />
    <More v-if="moreStore.isShow" />
    <Cookie v-if="!isAuthPage" />
    <Toast />
  </div>
</template>
