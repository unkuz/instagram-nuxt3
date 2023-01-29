<script setup lang="ts">
interface IProps {
  isMute: boolean
  buffered?: any
}

defineProps<IProps>()
</script>
<template>
  <div class="absolute bottom-[20px] right-[20px] inline-block">
    <span v-if="isMute"> Unmute</span>
    <span v-else>Mute</span>
  </div>
</template>
