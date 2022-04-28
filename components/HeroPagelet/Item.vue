<script lang="ts" setup></script>

<template>
  <div class="mx-[10px] inline-block">
    <div
      class="h-[66px] w-[66px] overflow-hidden rounded-full border-[3px] border-black"
    ></div>
    <span class="text-xs">{{ Math.random().toString(36).slice(2) }}</span>
  </div>
</template>
