<script lang="ts" setup>
import BackDrop from "@@/components/Utils/BackDrop.vue";
import { useClickOutSide } from "@@/composables";
import { useStoryStore } from "@@/store";

const storyStore = useStoryStore();
const barRef = ref<HTMLDivElement | null>(null);
const containerBar = ref<HTMLDivElement | null>(null);
const videoRef = ref<HTMLVideoElement | null>(null);
const bigPlayIcon = ref<HTMLDivElement | null>(null);
const mediaContainerRef = $ref<HTMLDivElement | null>(null);
const isVideoPlay = ref<boolean>(false);
const isVideoMuted = ref<boolean>(true);

useClickOutSide(mediaContainerRef, () => {
  storyStore.setIsShowStory(false);
});

const keyCodeBehaviour = (e: KeyboardEvent) => {
  if (e.charCode === 32) {
    togglePlay();
  } else if (e.charCode === 13) {
    storyStore.setIsShowStory(false);
  }
};

const updateTime = () => {
  Object.assign(barRef.value!.style, {
    width: `${
      (videoRef.value!.currentTime * containerBar.value!.clientWidth) / videoRef.value!.duration
    }px`
  });
  isVideoPlay.value = !videoRef.value!.paused;
  isVideoMuted.value = videoRef.value!.muted;
};

onMounted(() => {
  videoRef.value!.play();
  videoRef.value!.addEventListener("timeupdate", updateTime);
  window.addEventListener("keypress", keyCodeBehaviour);
});

watch(isVideoPlay, () => {
  if (isVideoPlay.value) {
    bigPlayIcon.value!.style.opacity = "0";
  } else {
    bigPlayIcon.value!.style.opacity = "1";
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("timeupdate", updateTime);
  window.removeEventListener("keypress", keyCodeBehaviour);
});

const toggleMuted = () => {
  isVideoMuted.value = !isVideoMuted.value;
  videoRef.value!.muted = !videoRef.value!.muted;
};

const togglePlay = () => {
  if (videoRef.value!.paused) {
    videoRef.value!.play();
  } else {
    videoRef.value!.pause();
  }
};
</script>

<template>
  <div>
    <BackDrop>
      <div ref="mediaContainerRef" class="relative h-full w-full sm:h-[881px] sm:w-[495.5px]">
        <div class="absolute inset-0">
          <video
            ref="videoRef"
            class="h-full w-full object-cover"
            src="/video/277951101_388380176198930_7921718664685624255_n.mp4"
            autoplay
            loop
            muted
            @click="togglePlay"
          />
        </div>
        <div
          ref="bigPlayIcon"
          :class="[
            'absolute top-1/2 left-1/2 h-[100px] w-[100px] origin-center -translate-x-1/2 -translate-y-1/2  scale-100  opacity-0 duration-500',
            {
              'scale-0 opacity-0': isVideoPlay,
            },
          ]"
          @click="togglePlay"
        >
          <svg
            aria-label="Play"
            class="cursor-pointer fill-c1 text-c1"
            role="img"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z"
            />
          </svg>
        </div>
        <!-- top -->
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
              <svg
                v-if="!isVideoPlay"
                aria-label="Play"
                class="cursor-pointer"
                color="#ffffff"
                fill="#ffffff"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
                @click="togglePlay"
              >
                <path
                  d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z"
                />
              </svg>
              <svg
                v-else
                aria-label="Pause"
                class="cursor-pointer"
                color="#ffffff"
                fill="#ffffff"
                height="16"
                role="img"
                viewBox="0 0 48 48"
                width="16"
                @click="togglePlay"
              >
                <path
                  d="M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z"
                />
              </svg>
              <svg
                v-if="isVideoMuted"
                aria-label="Audo is muted."
                class="cursor-pointer"
                color="#ffffff"
                fill="#ffffff"
                height="16"
                role="img"
                viewBox="0 0 48 48"
                width="16"
                @click="toggleMuted"
              >
                <path
                  clip-rule="evenodd"
                  d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4l-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z"
                  fill-rule="evenodd"
                />
              </svg>
              <svg
                v-else
                aria-label="Audio is playing"
                class="cursor-pointer"
                color="#ffffff"
                fill="#ffffff"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
                @click="toggleMuted"
              >
                <path
                  d="M16.636 7.028a1.5 1.5 0 10-2.395 1.807 5.365 5.365 0 011.103 3.17 5.378 5.378 0 01-1.105 3.176 1.5 1.5 0 102.395 1.806 8.396 8.396 0 001.71-4.981 8.39 8.39 0 00-1.708-4.978zm3.73-2.332A1.5 1.5 0 1018.04 6.59 8.823 8.823 0 0120 12.007a8.798 8.798 0 01-1.96 5.415 1.5 1.5 0 002.326 1.894 11.672 11.672 0 002.635-7.31 11.682 11.682 0 00-2.635-7.31zm-8.963-3.613a1.001 1.001 0 00-1.082.187L5.265 6H2a1 1 0 00-1 1v10.003a1 1 0 001 1h3.265l5.01 4.682.02.021a1 1 0 001.704-.814L12.005 2a1 1 0 00-.602-.917z"
                />
              </svg>
              <div class="relative">
                <svg
                  aria-label="Menu"
                  class="cursor-pointer"
                  color="#ffffff"
                  fill="#ffffff"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M12 9.75A2.25 2.25 0 1014.25 12 2.25 2.25 0 0012 9.75zm-6 0A2.25 2.25 0 108.25 12 2.25 2.25 0 006 9.75zm12 0A2.25 2.25 0 1020.25 12 2.25 2.25 0 0018 9.75z"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackDrop>
  </div>
</template>
