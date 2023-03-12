<script setup lang="ts">
import Cookie from '@/components/Utils/Cookie.vue'
import More from '@/components/Utils/More.vue'
import Add_ from '@/components/Molecules/Add/Prelude.vue'
import { useAddStore, useMoreStore } from '@/store'
import Toast from '@/components/Utils/Toast.vue'
const addStore = useAddStore()
const moreStore = useMoreStore()

const route = useRoute()

const isNotAuthPage = $computed(() => !_isEqual(route.name, 'auth'))
</script>

<template>
  <div>
    <Add_ v-if="addStore.isShow" />
    <More v-if="moreStore.isShow" />
    <Cookie v-if="isNotAuthPage" />
    <Toast />
  </div>
</template>
