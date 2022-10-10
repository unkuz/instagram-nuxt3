<script lang="ts" setup>
import Arrow from '@@/components/Utils/Arrow.vue'
import { useClickOutSide } from '@@/composables'
import { SECTION } from '@@/constants'
import { useGlobalStore } from '@@/store'

const router = useRouter()
const globalStore = useGlobalStore()
const accountPopRef = ref(null)
const isShow = ref(true)

useClickOutSide(accountPopRef, () => {})

const handleSelect = (section: SECTION, url: string = '') => {
  useDebounceRoute(url, router)
  globalStore.setSection(section)
}
</script>

<template>
  <div ref="accountPopRef" v-if="isShow">
    <Arrow />
    <div
      class="shadow-custom absolute -right-[40px] top-[35px] z-20 flex w-[230px] flex-col rounded-md border-[1px] border-gray-200 bg-white text-sm"
    >
      <div
        @click="handleSelect(SECTION.SELF, '/cuzknothz/')"
        class="z-50 flex h-[37px] cursor-pointer items-center justify-start space-x-[12px] py-[8px] px-[16px] hover:bg-gray-300"
      >
        <svg
          aria-label="Profile"
          class="_8-yf5"
          color="#262626"
          fill="#262626"
          height="16"
          role="img"
          viewBox="0 0 24 24"
          width="16"
        >
          <circle
            cx="12.004"
            cy="12.004"
            fill="none"
            r="10.5"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          ></circle>
          <path
            d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          ></path>
          <circle
            cx="12.006"
            cy="9.718"
            fill="none"
            r="4.109"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          ></circle>
        </svg>
        <span>Profile</span>
      </div>
      <hr />
      <div
        @click="handleSelect(SECTION.SELF, '/login/')"
        class="flex h-[37px] cursor-pointer justify-center px-[16px] py-[8px] hover:bg-gray-300"
      >
        Log out
      </div>
    </div>
  </div>
</template>
