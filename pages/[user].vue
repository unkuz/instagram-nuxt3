<script lang="ts" setup>
import { SELECT_TYPE } from '~~/constants/screens/account'
import { useProfileStore } from '~~/store/profile'
definePageMeta({
  layout: 'main',
})
const profileStore = useProfileStore()
const currentSelect = computed(() => profileStore.getSelect)
const isSelect = (select) => currentSelect === select
</script>

<template>
  <div class="text-sm">
    <div class="relative h-[250px]">
      <img
        class="absolute h-full w-full object-cover duration-500"
        src="/personal/274541816_246263407707597_708415355959487821_n.jpg"
      />
      <img
        src="/personal/avatar.jpg"
        class="absolute top-[67%] left-1/2 h-[120px] w-[120px] -translate-x-1/2 rounded-full border-[5px] border-white object-cover duration-500 hover:scale-110 md:top-[60%] md:left-[3%] md:h-[140px] md:w-[140px] md:translate-x-0"
      />
    </div>
    <div>
      <div class="mt-[50px] flex flex-col items-center md:ml-[180px] md:mt-[5px] md:block">
        <div class="font-august uppercase">Cuzknothz</div>
        <div class="flex space-x-[20px]">
          <span>96 posts</span><span>38.8k followers</span><span>150 following</span>
        </div>
      </div>
    </div>
    <div class="mt-[20px] flex flex-col items-center justify-center">
      <div>fhdskjafkjsdf</div>
      <div>🍕🤣🤣🤣😂😂</div>
      <div>ฮาโลวีนน็อคภูมิทัศน์คอนเทนเนอร์ คาร์โก้สะบึมบ๊อกซ์เทควันโดวานิลลา</div>
    </div>
    <div class="mt-[20px] flex justify-around">
      <svg
        v-if="currentSelect == SELECT_TYPE.ALL"
        @click="profileStore.setSelect(SELECT_TYPE.ALL)"
        aria-label="Posts"
        class="cursor-pointer"
        color="#0095f6"
        fill="#0095f6"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <rect
          fill="none"
          height="18"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          width="18"
          x="3"
          y="3"
        ></rect>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="9.015"
          x2="9.015"
          y1="3"
          y2="21"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="14.985"
          x2="14.985"
          y1="3"
          y2="21"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="21"
          x2="3"
          y1="9.015"
          y2="9.015"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="21"
          x2="3"
          y1="14.985"
          y2="14.985"
        ></line>
      </svg>
      <svg
        v-else
        @click="profileStore.setSelect(SELECT_TYPE.ALL)"
        aria-label="Posts"
        class="cursor-pointer"
        color="#8e8e8e"
        fill="#8e8e8e"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <rect
          fill="none"
          height="18"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          width="18"
          x="3"
          y="3"
        ></rect>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="9.015"
          x2="9.015"
          y1="3"
          y2="21"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="14.985"
          x2="14.985"
          y1="3"
          y2="21"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="21"
          x2="3"
          y1="9.015"
          y2="9.015"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="21"
          x2="3"
          y1="14.985"
          y2="14.985"
        ></line>
      </svg>
      <svg
        v-if="currentSelect == SELECT_TYPE.REELS"
        @click="profileStore.setSelect(SELECT_TYPE.REELS)"
        aria-label="Reels"
        class="cursor-pointer"
        color="#0095f6"
        fill="#0095f6"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <line
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
          x1="2.049"
          x2="21.95"
          y1="7.002"
          y2="7.002"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="13.504"
          x2="16.362"
          y1="2.001"
          y2="7.002"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="7.207"
          x2="10.002"
          y1="2.11"
          y2="7.002"
        ></line>
        <path
          d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <path
          d="M9.763 17.664a.908.908 0 01-.454-.787V11.63a.909.909 0 011.364-.788l4.545 2.624a.909.909 0 010 1.575l-4.545 2.624a.91.91 0 01-.91 0z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <svg
        v-else
        @click="profileStore.setSelect(SELECT_TYPE.REELS)"
        aria-label="Reels"
        class="cursor-pointer"
        color="#8e8e8e"
        fill="#8e8e8e"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <line
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
          x1="2.049"
          x2="21.95"
          y1="7.002"
          y2="7.002"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="13.504"
          x2="16.362"
          y1="2.001"
          y2="7.002"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="7.207"
          x2="10.002"
          y1="2.11"
          y2="7.002"
        ></line>
        <path
          d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <path
          d="M9.763 17.664a.908.908 0 01-.454-.787V11.63a.909.909 0 011.364-.788l4.545 2.624a.909.909 0 010 1.575l-4.545 2.624a.91.91 0 01-.91 0z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <svg
        v-if="currentSelect == SELECT_TYPE.TAG"
        @click="profileStore.setSelect(SELECT_TYPE.TAG)"
        aria-label="Tagged"
        class="cursor-pointer"
        color="#0095f6"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <path
          d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <circle
          cx="12.072"
          cy="11.075"
          fill="none"
          r="3.556"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></circle>
      </svg>
      <svg
        v-else
        @click="profileStore.setSelect(SELECT_TYPE.TAG)"
        aria-label="Tagged"
        class="cursor-pointer"
        color="#8e8e8e"
        fill="#8e8e8e"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <path
          d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <circle
          cx="12.072"
          cy="11.075"
          fill="none"
          r="3.556"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></circle>
      </svg>
    </div>
    <div class="mt-[20px] grid grid-cols-3 gap-[5px]">
      <div class="overflow-hidden">
        <img
          src="/personal/284244344_5311122635605193_5864440318105391567_n.jpg"
          class="aspect-square w-full cursor-pointer overflow-hidden object-cover duration-500 hover:scale-110"
        />
      </div>

      <img
        src="/personal/271827299_648555502866475_6120779624187626708_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/271827299_648555502866475_6120779624187626708_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/285912787_394288332653847_7603823348223049999_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/286080936_5042279369231267_5247065737773824167_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/286156153_1180787169352168_8777747362582813059_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/285912787_394288332653847_7603823348223049999_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/286080936_5042279369231267_5247065737773824167_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/286156153_1180787169352168_8777747362582813059_n.jpg"
        class="aspect-square w-full object-cover"
      />
    </div>
  </div>
</template>
