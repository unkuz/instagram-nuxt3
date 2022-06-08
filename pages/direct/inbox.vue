<script lang="ts" setup>
import { useGlobalStore } from '~~/store/global'

definePageMeta({
  layout: 'main',
})
const globalStore = useGlobalStore()
const isMobile = computed(() => globalStore.getIsMobile)
const isShowDetailChat = ref(false)
const showDetail = () => (isShowDetailChat.value = true)
</script>

<template>
  <div class="mt-[100px] flex w-full space-x-[30px] text-sm">
    <div
      v-if="(!isShowDetailChat && isMobile) || !isMobile"
      class="w-full flex-none rounded-2xl border-0 border-black bg-white md:w-[300px] md:border-[1px]"
    >
      <div
        @click="showDetail"
        class="flex h-[70px] items-center rounded-2xl duration-500 hover:bg-gray-200"
      >
        <div
          class="relative ml-[10px] mr-[10px] aspect-square h-[50px] w-[50px] rounded-full bg-yellow-300"
        >
          <div
            class="absolute bottom-[1px] right-[1px] h-[12px] w-[12px] rounded-full bg-green-500"
          ></div>
        </div>
        <div class="flex w-full flex-col">
          <div class="flex w-full justify-between md:w-[215px]">
            <span>ฟลุ</span><span class="mr-[10px] md:mr-0">10:00</span>
          </div>

          <span>ซเคิลวีไอ</span>
        </div>
      </div>
      <div class="mx-auto h-[1px] w-[200px] bg-black"></div>

      <div class="flex h-[70px] items-center rounded-2xl duration-500 hover:bg-gray-200">
        <div
          class="relative ml-[10px] mr-[10px] aspect-square h-[50px] w-[50px] rounded-full bg-yellow-300"
        >
          <div
            class="absolute bottom-[1px] right-[1px] h-[12px] w-[12px] rounded-full bg-green-500"
          ></div>
        </div>
        <div class="flex w-full flex-col">
          <div class="flex w-full justify-between md:w-[215px]">
            <span>ฟลุ</span><span class="mr-[10px] md:mr-0">10:00</span>
          </div>

          <span>ซเคิลวีไอ</span>
        </div>
      </div>
      <div class="mx-auto h-[1px] w-[200px] bg-black"></div>

      <div class="flex h-[70px] items-center rounded-2xl duration-500 hover:bg-gray-200">
        <div
          class="relative ml-[10px] mr-[10px] aspect-square h-[50px] w-[50px] rounded-full bg-yellow-300"
        >
          <div
            class="absolute bottom-[1px] right-[1px] h-[12px] w-[12px] rounded-full bg-green-500"
          ></div>
        </div>
        <div class="flex w-full flex-col">
          <div class="flex w-full justify-between md:w-[215px]">
            <span>ฟลุ</span><span class="mr-[10px] md:mr-0">10:00</span>
          </div>

          <span>ซเคิลวีไอ</span>
        </div>
      </div>
      <div class="mx-auto h-[1px] w-[200px] bg-black"></div>
    </div>
    <div
      v-if="isShowDetailChat || !isMobile"
      class="relative h-[600px] flex-grow rounded-2xl border-0 border-black bg-white p-[5px] md:border-[1px] md:p-[20px]"
    >
      <div>
        <div class="flex">
          <div class="relative ml-[10px] mr-[10px] h-[50px] w-[50px] rounded-full bg-yellow-300">
            <div
              class="absolute bottom-[1px] right-[1px] h-[12px] w-[12px] rounded-full bg-green-500"
            ></div>
          </div>
          <div class="flex flex-col items-start space-y-3">
            <span
              class="flex h-[40px] min-w-[40px] max-w-[260px] items-center rounded-full bg-[#f5f7fb] px-[30px] py-[10px] md:max-w-[500px]"
              >บึ้มฟลุตออ</span
            >
            <span
              class="flex h-[40px] min-w-[40px] max-w-[260px] items-center rounded-full bg-[#f5f7fb] px-[30px] md:max-w-[500px]"
              >สพุทโธโฮลวีตวืดเปโ</span
            >
          </div>
        </div>
        <div class="mt-[30px] flex flex-col items-end space-y-3">
          <span
            class="flex h-[40px] min-w-[40px] max-w-[260px] items-center justify-end rounded-full bg-fuchsia-400 px-[30px] md:max-w-[500px]"
            >ดี๊กระด๊าโปรเจ็กเตอร์แทงกั๊กรีไซเคิลวีไอพี ส</span
          >
          <span
            class="flex h-[40px] min-w-[40px] max-w-[260px] items-center rounded-full bg-fuchsia-400 px-[30px] md:max-w-[500px]"
            >นอิ่มแปร้แฟนซีมอบตั</span
          >
        </div>
        <div class="mt-[30px] flex">
          <div class="relative ml-[10px] mr-[10px] h-[50px] w-[50px] rounded-full bg-yellow-300">
            <div
              class="absolute bottom-[1px] right-[1px] h-[12px] w-[12px] rounded-full bg-green-500"
            ></div>
          </div>
          <div class="flex flex-col items-start space-y-3">
            <span
              class="flex h-[40px] min-w-[40px] max-w-[260px] flex-none items-center rounded-full bg-[#f5f7fb] px-[30px] md:max-w-[500px]"
              >บึ้มฟลุตออ</span
            >
            <span
              class="flex h-[40px] min-w-[40px] max-w-[260px] items-center rounded-full bg-[#f5f7fb] px-[30px] md:max-w-[500px]"
              >สพุทโธโฮลวีตวืดเปโ</span
            >
          </div>
        </div>

        <div
          class="absolute bottom-[20px] h-[55px] w-[calc(100%-60px)] rounded-full border-[1px] border-black"
        ></div>
      </div>
    </div>
  </div>
</template>
