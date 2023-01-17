<script lang="ts" setup>
import BackDrop from "@@/components/Utils/BackDrop.vue";
import { useClickOutSide, useLockScroll } from "@@/composables";
import { SectionEnum } from "@@/constants";
import { useGlobalStore, usePostStore } from "@@/store";

const postStore = usePostStore();
const globalStore = useGlobalStore();
const inputFileRef = $ref<HTMLInputElement | null>(null);
const containerPreviewRef = $ref<HTMLDivElement | null>(null);
const boxRef = ref<HTMLDivElement | null>(null);
let startPointX = $ref(0);

const postFiles = $computed<FileList[]>(() => postStore.files);
const listBolbs = computed(() => postStore.listBlobs);
const isHasFile = $computed(() => Array.from(postStore.files).length > 0);

useLockScroll();

const currentImageSlideIdx = computed<number>(() => {
  if (!startPointX) {
    return 0;
  } else {
    return -startPointX / 500;
  }
});

watch(listBolbs, () => {
  containerPreviewRef!.innerHTML = "";
  listBolbs.value.forEach((i: any) => {
    const image = document.createElement("img");
    image.src = String(i);
    Object.assign(image.style, {
      width: "500px",
      height: "750px",
      objectFit: "cover"
    });
    containerPreviewRef?.appendChild(image);
  });
});

onMounted(() => {
  inputFileRef?.addEventListener("change", (event) => {
    postStore.setFiles((event.target as HTMLInputElement).files!);
  });
});

onBeforeUnmount(() => {
  postStore.clearFiles();
});

useClickOutSide(boxRef, () => {
  globalStore.setSection(SectionEnum.HOME);
});

const closePostBox = () => {
  globalStore.setSection(SectionEnum.HOME);
};

const handleUpload = () => {
  if (inputFileRef) {
    inputFileRef.value = "";
  }
  inputFileRef?.click();
};

const handleSlide = (indicator: 1 | -1) => {
  containerPreviewRef!.style.transform = `translateX(${startPointX + 500 * indicator}px)`;
  startPointX += indicator * 500;
};
</script>

<template>
  <div>
    <BackDrop>
      <div>
        <input ref="inputFileRef" type="file" multiple hidden accept=".jpg, .jpeg, .png">
        <div
          ref="boxRef"
          class="absolute top-1/2 right-1/2 z-10 flex translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-xl border-[1px] border-gray-300"
        >
          <div :class="['relative w-[300px] bg-white text-[0.9rem]', { 'w-[500px]': isHasFile }]">
            <div class="absolute right-[12px] top-[12px]">
              <div
                class="relative h-[18px] w-[18px] cursor-pointer rounded-full bg-gray-600"
                @click="closePostBox"
              >
                <div
                  class="absolute top-1/2 left-1/2 h-[8px] w-[2px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"
                />
                <div
                  class="absolute top-1/2 left-1/2 h-[8px] w-[2px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white"
                />
              </div>
            </div>
            <div
              class="flex h-[42px] w-full items-center justify-center border-b-[1px] border-gray-300"
            >
              Create new post
            </div>
            <!-- <textarea v-show="isHasFile" class="w-full" />
        <span data-lexical-text="true">asdfdsfaa</span> -->
            <div class="relative w-full">
              <div
                class="absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-white"
                @click="handleSlide(1)"
              >
                previous
              </div>
              <div
                class="absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-white"
                @click="handleSlide(-1)"
              >
                next
              </div>
              <div
                class="absolute bottom-[15px] left-1/2 z-10 flex -translate-x-1/2 justify-between space-x-[4px]"
              >
                <div
                  v-for="(i, idx) in postFiles"
                  :key="idx"
                  :class="[
                    'h-[6px] w-[6px] rounded-[50%] bg-white ',
                    {
                      'bg-[#0c8aff]': currentImageSlideIdx === idx,
                    },
                  ]"
                />
              </div>
              <div
                v-show="isHasFile"
                ref="containerPreviewRef"
                class="inline-flex h-[750px] w-full items-center bg-black duration-100"
              />
            </div>
            <div
              :class="[
                'flex h-[200px] w-full flex-col items-center justify-center space-x-[10px] border-t-0 border-gray-300',
                {
                  'absolute bottom-[20px] right-[20px] flex aspect-square h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[50%] bg-black/20':
                    isHasFile,
                },
              ]"
              @click="handleUpload"
            >
              <svg
                v-if="isHasFile"
                aria-label="Open Media Gallery"
                class="_ab6-"
                color="#ffffff"
                fill="#ffffff"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <path
                  d="M19 15V5a4.004 4.004 0 00-4-4H5a4.004 4.004 0 00-4 4v10a4.004 4.004 0 004 4h10a4.004 4.004 0 004-4zM3 15V5a2.002 2.002 0 012-2h10a2.002 2.002 0 012 2v10a2.002 2.002 0 01-2 2H5a2.002 2.002 0 01-2-2zm18.862-8.773A.501.501 0 0021 6.57v8.431a6 6 0 01-6 6H6.58a.504.504 0 00-.35.863A3.944 3.944 0 009 23h6a8 8 0 008-8V9a3.95 3.95 0 00-1.138-2.773z"
                  fill-rule="evenodd"
                />
              </svg>

              <svg
                v-if="!isHasFile"
                aria-label="Icon to represent media such as images or videos"
                color="#262626"
                fill="#262626"
                height="77"
                role="img"
                viewBox="0 0 97.6 77.3"
                width="96"
              >
                <path
                  d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                  fill="currentColor"
                />
                <path
                  d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                  fill="currentColor"
                />
                <path
                  d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                  fill="currentColor"
                />
              </svg>
              <span v-if="!isHasFile" class="mt-[20px]">Drag photos and videos here</span>
            </div>
          </div>
        </div>
      </div>
    </BackDrop>
  </div>
</template>
