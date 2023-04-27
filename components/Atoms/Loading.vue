<script setup>
import LoadingIcon_ from '@/assets/svg/Ripple-1s-200px.svg'
import BackDrop from '@/components/Utils/BackDrop.vue'

const nuxtApp = useNuxtApp()

let isShow = $ref(false)

nuxtApp.hook('page:start', () => (isShow = true))
nuxtApp.hook('page:finish', () => (isShow = false))
</script>
<template>
  <BackDrop v-if="isShow">
    <LoadingIcon_ class="w-[150px] !bg-transparent md:w-[170px]" />
  </BackDrop>
</template>
