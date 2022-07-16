<script lang="ts" setup>
import BackDrop from '~~/components/Utils/BackDrop.vue'
import { useClickOutSide } from '~~/composables/useClickOutSide'
import { useLockScroll } from '~~/composables/useLockScroll'
import { APP_ROUTES } from '~~/routes'
import PlayIcon_ from '~~/assets/svg/play_icon.svg'
import PlayIcon__ from '~~/assets/svg/play_original_icon.svg'
import PauseIcon_ from '~~/assets/svg/pause_icon.svg'
import MutedIcon_ from '~~/assets/svg/muted_icon.svg'
import UnMutedIcon_ from '~~/assets/svg/un_muted_icon.svg'
import MenuIcon_ from '~~/assets/svg/menu_icon.svg'

const barRef = ref(null)
const containerBar = ref(null)
const videoRef = ref(null)
const bigPlayIcon = ref(null)
const mediaContainerRef = ref(null)
const isVideoPlay = ref(false)
const isVideoMuted = ref(true)

useLockScroll()

useClickOutSide(mediaContainerRef, () => {
  navigateTo(APP_ROUTES._____)
})

const keyCodeBehaviour = (e) => {
  console.log(e.charCode)
  if (e.charCode === 32) {
    togglePlay()
  } else if (e.charCode === 13) {
    navigateTo(APP_ROUTES._____)
  }
}

const updateTime = () => {
  Object.assign(barRef.value.style, {
    width: `${
      (videoRef.value.currentTime * containerBar.value.clientWidth) / videoRef.value.duration
    }px`,
  })
  isVideoPlay.value = !videoRef.value.paused
  isVideoMuted.value = videoRef.value.muted
}

onMounted(() => {
  videoRef.value.play()
  videoRef.value.addEventListener('timeupdate', updateTime)
  window.addEventListener('keypress', keyCodeBehaviour)
})

watch(isVideoPlay, () => {
  if (isVideoPlay.value) {
    bigPlayIcon.value.style.opacity = '0'
  } else {
    bigPlayIcon.value.style.opacity = '1'
  }
})

onUnmounted(() => {
  window.removeEventListener('timeupdate', updateTime)
  window.removeEventListener('keypress', keyCodeBehaviour)
})

const toggleMuted = () => {
  isVideoMuted.value = !isVideoMuted.value
  videoRef.value.muted = !videoRef.value.muted
}

const togglePlay = () => {
  if (videoRef.value.paused) {
    videoRef.value.play()
  } else {
    videoRef.value.pause()
  }
}
</script>

<template>
  <div>
    <BackDrop>
      <div class="relative h-full w-full sm:h-[881px] sm:w-[495.5px]" ref="mediaContainerRef">
        <div class="absolute inset-0">
          <video
            @click="togglePlay"
            class="h-full w-full object-cover"
            src="/video/277951101_388380176198930_7921718664685624255_n.mp4"
            autoplay
            loop
            muted
            ref="videoRef"
          />
        </div>
        <div
          @click="togglePlay"
          ref="bigPlayIcon"
          :class="`absolute top-1/2 left-1/2 h-[100px] w-[100px] origin-center -translate-x-1/2 -translate-y-1/2  ${
            isVideoPlay ? 'scale-0 opacity-0' : ' scale-100 opacity-100'
          } opacity-0 duration-500`"
        >
          <PlayIcon_ />
        </div>
        <div class="mx-auto w-[90%] sm:w-[445px]">
          <div class="mt-[25px] flex w-full justify-between space-x-2">
            <div class="relative h-[2px] w-full bg-[#c2c2c2]" ref="containerBar">
              <div ref="barRef" class="absolute top-0 left-0 h-full bg-white"></div>
            </div>
          </div>
          <div class="relative mt-[10px] flex items-center justify-between">
            <div class="flex items-center space-x-[10px] text-[0.8rem] text-white">
              <div class="h-[35px] w-[35px] rounded-[50%] bg-white"></div>
              <div>cuzknothz</div>
              <div class="text-[0.8rem]">1 h</div>
            </div>
            <div class="flex items-center space-x-[10px]">
              <div @click="togglePlay">
                <PlayIcon__ v-if="!isVideoPlay" />
                <PauseIcon_ v-else />
              </div>
              <div @click="toggleMuted">
                <MutedIcon_ v-if="isVideoMuted" />
                <UnMutedIcon_ v-else />
              </div>

              <div class="relative">
                <MenuIcon_ />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackDrop>
  </div>
</template>
