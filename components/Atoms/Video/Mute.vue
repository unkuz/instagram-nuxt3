<script setup lang="ts">
import SoundOffIcon_ from '@@/assets/svg/sound_off.svg'
import SoundOnIcon_ from '@@/assets/svg/sound_on.svg'

interface IProps {
  isMute: boolean
  buffered?: any
}

defineProps<IProps>()
</script>
<template>
  <div class="absolute bottom-[30px] right-[40px] inline-block invert md:bottom-[40px] md:right-[40px]">
    <SoundOffIcon_ v-if="isMute" />
    <SoundOnIcon_ v-else />
  </div>
</template>
