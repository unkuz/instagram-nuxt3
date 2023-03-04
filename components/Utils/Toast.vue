<script setup lang="ts">
import { ToastTypeEnum, useToastStore } from '~~/store/toast'

const toastStore = useToastStore()

const isShow = $computed(() => toastStore.isShow)
const content = $computed(() => toastStore.content)
const type = $computed(() => toastStore.type)

const close = () => toastStore.toggle(false)
</script>
<template>
  <div
    :class="[
      'fixed left-0 right-0 z-50 flex h-[40px] w-screen items-center  justify-between  px-[20px]  text-[.85rem] text-c1 backdrop-blur-md duration-100',
      ,
      isShow ? 'bottom-0' : '-bottom-[100%]',
      type === ToastTypeEnum.ERROR && 'bg-red-500',
      type === ToastTypeEnum.SUCCESS && 'bg-c15',
      type === ToastTypeEnum.WARNING && 'bg-c11',
    ]"
  >
    <span>{{ content }}</span>
    <button @click="close">x</button>
  </div>
</template>
