<script setup lang="ts">
import SoundOffIcon_ from '@/assets/svg/sound_off.svg'
import SoundOnIcon_ from '@/assets/svg/sound_on.svg'

interface IProps {
  isMute: boolean
  buffered?: any
}

defineProps<IProps>()
</script>
<template>
  <div class="absolute inline-block cursor-pointer invert dark:[&>svg]:invert">
    <SoundOffIcon_ v-if="isMute" />
    <SoundOnIcon_ v-else />
  </div>
</template>
