<script lang="ts" setup></script>

<template>
  <div
    class="mx-[10px] inline-block max-w-[74px] select-none overflow-hidden text-ellipsis whitespace-nowrap sm:cursor-pointer"
  >
    <div
      class="mx-auto aspect-square h-[66px] overflow-hidden rounded-full bg-gradient-to-bl from-[#c42d91] to-[#f99d4c] p-[3px]"
    >
      <div class="h-full w-full rounded-full bg-white p-[3px]">
        <img
          class="h-full w-full rounded-full object-cover"
          src="/image/279375482_145702114637088_9152756357257867371_n.jpg"
          alt=""
          crossorigin="anonymous"
        />
      </div>
    </div>
    <span class="text-ellipsis whitespace-nowrap text-xs">
      {{ Math.random().toString(36).slice(2) + 'dsfjkhsdjkfhsdjkj' }}
    </span>
  </div>
</template>
