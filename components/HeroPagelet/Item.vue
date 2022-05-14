<script lang="ts" setup></script>

<template>
  <div
    class="mx-[10px] inline-block max-w-[74px] select-none overflow-hidden text-ellipsis whitespace-nowrap sm:cursor-pointer"
  >
    <div
      class="mx-auto aspect-square h-[66px] overflow-hidden rounded-full bg-gradient-to-bl from-[#c42d91] to-[#f99d4c] p-[2px]"
    >
      <div class="h-full w-full rounded-full bg-white p-[2px]">
        <img
          class="aspect-square rounded-full"
          src="/image/deth8za-94db9472-3b4c-4495-8f8c-ecaa93c92398.jpg"
          alt=""
        />
      </div>
    </div>
    <span class="text-ellipsis whitespace-nowrap text-xs">
      {{ Math.random().toString(36).slice(2) + "dsfjkhsdjkfhsdjkj" }}
    </span>
  </div>
</template>
