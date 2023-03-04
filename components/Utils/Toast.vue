<script setup lang="ts">
import { useToastStore } from '~~/store/toast'

const toastStore = useToastStore()

const isShow = $computed(() => toastStore.isShow)

const close = () => toastStore.toggle(false)
</script>
<template>
  <div
    :class="[
      'fixed left-0 right-0 z-50 flex h-[40px] w-screen items-center  justify-between bg-c2 px-[20px]  text-[.85rem] text-c1 backdrop-blur-md duration-100',
      ,
      isShow ? 'bottom-0' : '-bottom-[100%]',
    ]"
  >
    <span>FUCK</span>
    <button @click="close">x</button>
  </div>
</template>
