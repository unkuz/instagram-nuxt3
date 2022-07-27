<script lang="ts" setup>
import { useAuthStore } from '~~/store/auth'
import { useSuggestionStore } from '~~/store/suggestion'
import Item from './Item.vue'

const authStore = useAuthStore()
const suggestionStore = useSuggestionStore()

const suggestion = computed(() => suggestionStore.suggestion)

// onMounted(() => {
//   document.fonts.ready.then(() => {
//     console.log('FONT')
//   })
// })
</script>

<template>
  <div class="select-none" draggable="false">
    <div class="mt-[18px] mb-[22px] flex h-[56px] items-center justify-between">
      <div class="aspect-square w-[56px] select-none rounded-full bg-red-200 object-cover">
        <img
          crossorigin="anonymous"
          data-testid="user-avatar"
          draggable="false"
          class="rounded-full sm:hover:cursor-pointer"
          :src="authStore.avatar"
        />
      </div>
      <div class="-ml-[70px]">
        <p class="font-medium">cuzknothz</p>
        <p class="text-gray-600">cuzknothz</p>
      </div>
      <div class="text-[#1da0f6]">Switch</div>
    </div>
    <div class="flex h-[11px] items-center justify-between text-sm text-gray-600">
      <div class="text-gray-600">Suggestions for you</div>
      <div>See All</div>
    </div>
    <div class="mt-[8px] w-full">
      <Item
        v-for="{ name, avatar, id } in suggestion"
        :key="id"
        :name="name"
        :avatar="avatar"
        :id="id"
      />
    </div>
    <div class="mt-[10px]">
      <div class="flex justify-center text-gray-600">
        <span
          v-for="(i, idx) in ['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy Terms']"
          :key="idx"
          class="cursor-not-allowed after:content-['.'] last:after:content-['']"
          >{{ i }}</span
        >
      </div>
      <div class="mb-[13px] flex justify-center text-gray-600">
        <span
          v-for="(i, idx) in ['Location', 'Top accounts', 'Hashtags', 'Language']"
          :key="idx"
          class="cursor-not-allowed after:content-['.'] last:after:content-['']"
          >{{ i }}</span
        >
      </div>
    </div>

    <div class="flex flex-col items-center space-y-2 text-gray-500">
      <div>© 2022 Instagram clone by</div>
      <a href="https://github.com/cuzknothz" target="_blank">
        <div
          class="cursor-pointer select-none font-august text-[1.2rem] uppercase tracking-wider text-black"
        >
          Cuzknothz_.
        </div>
      </a>
    </div>
    <!-- <div class="mt-[10px] flex flex-col items-center space-y-2 text-gray-500">
      <div>Technology using</div>
      <div class="flex justify-center space-x-[10px]">
        <a href="https://vuejs.org/" target="_blank" title="VueJS">
          <svg
            class="h-[24px] w-[24px] cursor-pointer"
            viewBox="0 0 128 128"
            width="24"
            height="24"
            data-v-b746bafa=""
          >
            <path
              fill="#42b883"
              d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
              data-v-b746bafa=""
            ></path>
            <path
              fill="#35495e"
              d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
              data-v-b746bafa=""
            ></path>
          </svg>
        </a>
        <a href="https://v3.nuxtjs.org/" target="_blank" title="Nuxt3JS">
          <svg
            viewBox="0 0 221 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-[24px] cursor-pointer"
          >
            <g clip-path="url(#a)">
              <path
                fill="currentColor"
                d="M82.5623 18.5705h7.3017l15.474 24.7415V18.5705h6.741v35.0576h-7.252L89.3025 28.938v24.6901h-6.7402V18.5705ZM142.207 53.628h-6.282v-3.916c-1.429 2.7559-4.339 4.3076-8.015 4.3076-5.822 0-9.603-4.1069-9.603-10.0175V28.3847h6.282v14.3251c0 3.4558 2.146 5.8592 5.362 5.8592 3.524 0 5.974-2.7044 5.974-6.4099V28.3847h6.282V53.628ZM164.064 53.2289l-6.026-8.4144-6.027 8.4144h-6.69l9.296-13.1723-8.58-12.0709h6.843l5.158 7.2641 5.106-7.2641h6.895l-8.632 12.0709 9.295 13.1723h-6.638ZM183.469 20.7726v7.6116h7.149v5.1593h-7.149v12.5311c0 .4208.17.8245.473 1.1223.303.2978.715.4654 1.144.4661h5.532v5.9547h-4.137c-5.617 0-9.293-3.2062-9.293-8.8109V33.5484h-5.056v-5.1642h3.172c1.479 0 2.34-.8639 2.34-2.2932v-5.3184h5.825Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.1185 11.5456c-1.8853-3.24168-6.5987-3.24169-8.484 0L1.08737 46.8747c-1.885324 3.2417.47133 7.2938 4.24199 7.2938H21.3695c-1.6112-1.4081-2.2079-3.8441-.9886-5.9341l15.5615-26.675-5.8239-10.0138Z"
                fill="#80EEC0"
              ></path>
              <path
                d="M43.1374 19.2952c1.5603-2.6523 5.461-2.6523 7.0212 0l17.0045 28.9057c1.5603 2.6522-.39 5.9676-3.5106 5.9676h-34.009c-3.1206 0-5.0709-3.3154-3.5106-5.9676l17.0045-28.9057ZM209.174 53.8005H198.483c0-1.8514.067-3.4526 0-6.0213h10.641c1.868 0 3.353.1001 4.354-.934 1-1.0341 1.501-2.3351 1.501-3.9029 0-1.8347-.667-3.2191-2.002-4.1532-1.301-.9674-2.985-1.4511-5.054-1.4511h-2.601v-5.2539h2.652c1.701 0 3.119-.4003 4.253-1.2009 1.134-.8006 1.701-1.9849 1.701-3.5527 0-1.301-.434-2.3351-1.301-3.1023-.834-.8007-2.001-1.201-3.503-1.201-1.634 0-2.918.4837-3.853 1.4511-.9.9674-1.401 2.1517-1.501 3.5527h-6.254c.133-3.2358 1.251-5.7877 3.352-7.6558 2.135-1.868 4.887-2.8021 8.256-2.8021 2.402 0 4.42.4337 6.055 1.301 1.668.834 2.919 1.9515 3.753 3.3525.867 1.4011 1.301 2.9523 1.301 4.6536 0 1.9681-.551 3.636-1.651 5.0037-1.068 1.3344-2.402 2.235-4.004 2.7021 1.969.4003 3.57 1.3677 4.804 2.9022 1.234 1.5011 1.852 3.4025 1.852 5.7043 0 1.9347-.468 3.7028-1.402 5.304-.934 1.6012-2.301 2.8855-4.103 3.8529-1.768.9674-3.953 1.4511-6.555 1.4511Z"
                fill="#00DC82"
              ></path>
            </g>
            <defs>
              <clipPath id="a"><path fill="#fff" d="M0 0h221v65H0z"></path></clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://pinia.vuejs.org/" target="_blank" title="Pinia">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:v="https://vecta.io/nano"
            class="h-[24px] cursor-pointer"
            viewBox="0 0 319 477"
          >
            <linearGradient id="A">
              <stop offset="0" stop-color="#52ce63" />
              <stop offset="1" stop-color="#51a256" />
            </linearGradient>
            <linearGradient
              id="B"
              x1="55.342075%"
              x2="42.816933%"
              xlink:href="#A"
              y1="0%"
              y2="42.862855%"
            />
            <linearGradient
              id="C"
              x1="55.348642%"
              x2="42.808103%"
              xlink:href="#A"
              y1="0%"
              y2="42.862855%"
            />
            <linearGradient id="D" x1="50%" x2="50%" y1="0%" y2="58.811243%">
              <stop offset="0" stop-color="#8ae99c" />
              <stop offset="1" stop-color="#52ce63" />
            </linearGradient>
            <linearGradient id="E" x1="51.37763%" x2="44.584719%" y1="17.472551%" y2="100%">
              <stop offset="0" stop-color="#ffe56c" />
              <stop offset="1" stop-color="#ffc63a" />
            </linearGradient>
            <g fill="none" fill-rule="evenodd" transform="translate(-34 -24)">
              <g transform="matrix(.992546 .121869 -.121869 .992546 33.922073 .976691)">
                <path
                  d="M103.951 258.274c44.362-4.361 60.015-40.391 65.353-94.699s-30.932-103.451-46.02-101.968-63.039 58.905-68.377 113.213 4.683 87.815 49.044 83.454z"
                  fill="url(#B)"
                  transform="matrix(.707107 -.707107 .707107 .707107 -80.496332 125.892944)"
                />
                <path
                  d="M275.877 258.274c44.362 4.361 53.167-29.265 47.829-83.573S271.632 63.09 256.544 61.607s-52.575 47.54-47.236 101.848 22.207 90.458 66.569 94.819z"
                  fill="url(#C)"
                  transform="matrix(.707107 .707107 -.707107 .707107 191.403399 -141.861963)"
                />
                <path
                  d="M188.37 216.876c39.942 0 50.953-38.252 50.953-97.899S201.955.876 188.37.876s-52.047 58.455-52.047 118.101 12.106 97.899 52.047 97.899z"
                  fill="url(#D)"
                />
              </g>
              <path
                d="M184.473 501C267.592 501 335 476.855 335 367.355S267.592 168 184.473 168 34 257.855 34 367.355 101.355 501 184.473 501z"
                fill="url(#E)"
              />
              <g fill="#eaadcc">
                <ellipse cx="260.5" cy="335" rx="21.5" ry="10" />
                <ellipse
                  cx="102.5"
                  cy="329"
                  rx="21.5"
                  ry="10"
                  transform="matrix(.992546 .121869 -.121869 .992546 40.859033 -10.039292)"
                />
              </g>
              <g transform="matrix(-.999391 .0349 .0349 .999391 269.284825 271.027667)">
                <path
                  d="M73.103 57.915c6.65 5.03 14.195 6.913 22.633 5.649s14.595-5 18.47-11.207"
                  stroke="#000"
                  stroke-linejoin="round"
                  stroke-width="6"
                  class="B"
                />
                <path
                  d="M154.501 3c-5.938 0-11.313 2.406-15.204 6.297A21.43 21.43 0 0 0 133 24.499c0 5.938 2.406 11.313 6.297 15.203S148.563 46 154.501 46a21.43 21.43 0 0 0 15.202-6.297c3.89-3.891 6.296-9.266 6.296-15.203a21.43 21.43 0 0 0-6.297-15.203A21.43 21.43 0 0 0 154.501 3z"
                  fill="#000"
                />
                <path
                  d="M154 21c0-3.866 3.135-7 6.999-7a7 7 0 1 1 0 14c-3.864-.001-6.999-3.134-6.999-7z"
                  fill="#fff"
                />
                <path
                  d="M24.5 13c-5.938 0-11.312 2.406-15.203 6.297A21.43 21.43 0 0 0 3 34.499c0 5.938 2.406 11.313 6.297 15.204A21.43 21.43 0 0 0 24.5 56c5.937 0 11.312-2.406 15.203-6.297S46 40.437 46 34.499a21.43 21.43 0 0 0-6.297-15.202C35.812 15.406 30.437 13 24.5 13z"
                  fill="#000"
                />
                <g fill="#fff">
                  <path
                    d="M136 24.499C136 34.718 144.283 43 154.501 43S173 34.718 173 24.499A18.5 18.5 0 0 0 154.501 6C144.284 6 136 14.282 136 24.499zm-6 0C130 10.968 140.969 0 154.501 0S179 10.968 179 24.499 168.032 49 154.501 49 130 38.032 130 24.499zm-124 10C6 44.718 14.282 53 24.5 53S43 44.718 43 34.499 34.717 16 24.5 16 6 24.282 6 34.499zm-6 0C0 20.968 10.968 10 24.5 10S49 20.968 49 34.499 38.031 59 24.5 59 0 48.032 0 34.499z"
                    fill-rule="nonzero"
                    stroke="#fff"
                    stroke-width="3"
                  />
                  <path d="M24 31a7 7 0 1 1 14 0 7 7 0 1 1-14 0z" />
                </g>
              </g>
              <g stroke="#ecb732" class="B C">
                <path d="m70.5 377.5 74 77" />
                <path d="m134.5 386.5-47 50" />
                <g transform="matrix(-1 0 0 1 298 377)">
                  <path d="m.5.5 74 77" />
                  <path d="m64.5 9.5-47 50" />
                </g>
              </g>
              <g stroke="#ffc73b" transform="matrix(0 1 -1 0 215 207)" class="B C">
                <path d="m.5.5 49 49" />
                <path d="M49.5 10.5l-49 49" />
              </g>
            </g>
          </svg>
        </a>
        <a href="https://vercel.com/" target="_blank" title="Vercel">
          <svg
            data-testid="dashboard/logo"
            aria-label="Vercel Logo"
            fill="var(--geist-foreground)"
            height="26"
            viewBox="0 0 75 65"
            class="h-[22px] cursor-pointer"
          >
            <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
          </svg>
        </a>
      </div>
    </div> -->
  </div>
</template>
