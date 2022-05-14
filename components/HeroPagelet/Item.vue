<script lang="ts" setup></script>

<template>
  <div
    class="mx-[10px] inline-block max-w-[74px] overflow-hidden text-ellipsis whitespace-nowrap"
  >
    <div
      class="mx-auto h-[66px] w-[66px] overflow-hidden rounded-full border-[3px] border-gray-200"
    ></div>
    <span class="text-ellipsis whitespace-nowrap text-xs">
      {{ Math.random().toString(36).slice(2) + "dsfjkhsdjkfhsdjkj" }}
    </span>
  </div>
</template>
