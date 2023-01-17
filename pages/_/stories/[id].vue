<script lang="ts" setup>
import MenuIcon_ from "@@/assets/svg/menu_icon.svg";
import MutedIcon_ from "@@/assets/svg/muted_icon.svg";
import PauseIcon_ from "@@/assets/svg/pause_icon.svg";
import PlayIcon_ from "@@/assets/svg/play_icon.svg";
import PlayIcon__ from "@@/assets/svg/play_original_icon.svg";
import UnMutedIcon_ from "@@/assets/svg/un_muted_icon.svg";
import BackDrop from "@@/components/Utils/BackDrop.vue";
import { useClickOutSide, useLockScroll } from "@@/composables";

const router = useRouter();
const barRef = $ref<HTMLDivElement | null>(null);
const containerBar = $ref<HTMLDivElement | null>(null);
const videoRef = $ref<HTMLVideoElement | null>(null);
const bigPlayIcon = $ref<HTMLDivElement | null>(null);
const mediaContainerRef = $ref<HTMLDivElement | null>(null);
let isVideoPlay = $ref(false);
let isVideoMuted = $ref(true);

useLockScroll();

useClickOutSide(mediaContainerRef, () => {
  router.back();
});

const keyCodeBehaviour = (e: KeyboardEvent) => {
  if (e.charCode === 32) {
    togglePlay();
  }
  if (e.charCode === 13) {
    router.back();
  }
  if (e.charCode === 109) {
    toggleMuted();
  }
};

const updateTime = () => {
  Object.assign(barRef!.style, {
    width: `${(videoRef!.currentTime * containerBar!.clientWidth) / videoRef!.duration}px`
  });
  isVideoPlay = !videoRef!.paused;
  isVideoMuted = videoRef!.muted;
};

onMounted(() => {
  videoRef!.play();
  videoRef!.addEventListener("timeupdate", updateTime);
  window.addEventListener("keypress", keyCodeBehaviour);
});

watch(isVideoPlay, () => {
  if (isVideoPlay) {
    bigPlayIcon!.style.opacity = "0";
  } else {
    bigPlayIcon!.style.opacity = "1";
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("timeupdate", updateTime);
  window.removeEventListener("keypress", keyCodeBehaviour);
});

const toggleMuted = () => {
  isVideoMuted = !isVideoMuted;
  videoRef!.muted = !videoRef!.muted;
};

const togglePlay = () => (videoRef!.paused ? videoRef!.play() : videoRef!.pause());
</script>

<template>
  <div>
    <BackDrop>
      <div ref="mediaContainerRef" class="relative h-full w-full sm:h-[881px] sm:w-[495.5px]">
        <div class="absolute inset-0">
          <video
            ref="videoRef"
            class="h-full w-full object-cover"
            src="/video/242322324_812426336116660_1281566458903572911_n.mp4"
            autoplay
            loop
            muted
            @click="togglePlay"
          />
        </div>
        <div
          ref="bigPlayIcon"
          :class="[
            'absolute top-1/2 left-1/2 h-[100px] w-[100px] origin-center -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 duration-500',
            {
              'scale-0 opacity-0': isVideoPlay,
            },
          ]"
          @click="togglePlay"
        >
          <PlayIcon_ />
        </div>
        <div class="mx-auto w-[90%] sm:w-[445px]">
          <div class="mt-[25px] flex w-full justify-between space-x-2">
            <div ref="containerBar" class="relative h-[2px] w-full bg-[#c2c2c2]">
              <div ref="barRef" class="absolute top-0 left-0 h-full bg-white" />
            </div>
          </div>
          <div class="relative mt-[10px] flex items-center justify-between">
            <div class="flex items-center space-x-[10px] text-[0.8rem] text-white">
              <div class="h-[35px] w-[35px] rounded-[50%] bg-white" />
              <div>cuzknothz</div>
              <div class="text-[0.8rem]">
                1 h
              </div>
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
