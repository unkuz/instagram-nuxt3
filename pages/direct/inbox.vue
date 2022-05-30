<script lang="ts" setup>
import { useGlobalStore } from '~~/store/global'
import Navbarbottom from '~~/layouts/navbarbottom.vue'
import Search from '~~/components/Header/Search.vue'
const globalStore = useGlobalStore()
const isMobile = computed(() => globalStore.getIsMobile)
</script>

<template>
  <div>
    <Header v-if="!isMobile" />
    <div class="mx-auto mt-[50px] w-full sm:mt-[84px] lg:w-[935px]">
      <div class="flex h-screen w-full items-stretch border-0 border-gray-300 md:border-[1px]">
        <div class="w-full border-r-[1px] border-gray-300 md:min-w-[350px]">
          <div
            v-if="!isMobile"
            class="flex h-[60px] items-center justify-between border-b-[1px] border-gray-300 px-[20px]"
          >
            <div class="h-0 w-[32px]"></div>
            <div>CUZKNOTHZ</div>
            <div>icon</div>
          </div>
          <div v-else class="flex h-[60px] items-center justify-center bg-red-300"><Search /></div>
          <div class="text-sm">
            <div
              class="flex h-[72px] w-full cursor-pointer items-center px-[20px] py-[8px] hover:bg-gray-200"
            >
              <div class="mr-[12px]">
                <div class="aspect-square h-[56px] overflow-hidden rounded-full">
                  <img
                    class="h-full w-full rounded-full object-cover"
                    src="/explore/269745549_1653199611678007_2927572044521418605_n.jpg"
                    alt=""
                    crossorigin="anonymous"
                  />
                </div>
              </div>
              <div>
                <div>jfsdakfjksdf</div>
                <div class="text-gray-300">Active today</div>
              </div>
            </div>
            <div
              class="flex h-[72px] w-full cursor-pointer items-center px-[20px] py-[8px] hover:bg-gray-200"
            >
              <div class="mr-[12px]">
                <div class="aspect-square h-[56px] overflow-hidden rounded-full">
                  <img
                    class="h-full w-full rounded-full object-cover"
                    src="/explore/269745549_1653199611678007_2927572044521418605_n.jpg"
                    alt=""
                    crossorigin="anonymous"
                  />
                </div>
              </div>
              <div>
                <div>jfsdakfjksdf</div>
                <div class="text-gray-300">Active today</div>
              </div>
            </div>
            <div
              class="flex h-[72px] w-full cursor-pointer items-center px-[20px] py-[8px] hover:bg-gray-200"
            >
              <div class="mr-[12px]">
                <div class="aspect-square h-[56px] overflow-hidden rounded-full">
                  <img
                    class="h-full w-full rounded-full object-cover"
                    src="/explore/269745549_1653199611678007_2927572044521418605_n.jpg"
                    alt=""
                    crossorigin="anonymous"
                  />
                </div>
              </div>
              <div>
                <div>jfsdakfjksdf</div>
                <div class="text-gray-300">Active today</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isMobile" class="w-full"></div>
      </div>
    </div>

    <Navbarbottom />
  </div>
</template>
