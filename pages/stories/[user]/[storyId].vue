<script lang="ts" setup>
const router = useRouter()

const handleClick = () => router.push('/')
</script>

<template>
  <div class="flex h-screen w-full flex-col items-center justify-between bg-[#1a1a1a]">
    <div class="flex h-[60px] w-full items-center justify-between px-[16px]">
      <img
        @click="handleClick"
        alt="Instagram"
        class="h-[29px] cursor-pointer select-none"
        draggable="false"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-dark.png/ff9b85f2b7ca.png"
      />
      <svg
        @click="handleClick"
        aria-label="Close"
        class="_8-yf5"
        color="#ffffff"
        fill="#ffffff"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <polyline
          fill="none"
          points="20.643 3.357 12 12 3.353 20.647"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        ></polyline>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          x1="20.649"
          x2="3.354"
          y1="20.649"
          y2="3.354"
        ></line>
      </svg>
    </div>
    <div class="flex h-auto w-full items-center justify-center space-x-[50px] text-white">
      <div class="aspect-[10/19] w-[181px] rounded-lg bg-white"></div>
      <div class="aspect-[10/19] w-[181px] rounded-lg bg-white"></div>
      <div class="aspect-[10/19] w-full rounded-lg bg-white md:w-[453px]"></div>
      <div class="aspect-[10/19] w-[181px] rounded-lg bg-white"></div>
      <div class="aspect-[10/19] w-[181px] rounded-lg bg-white"></div>
    </div>
    <div class="h-[60px]"></div>
  </div>
</template>
