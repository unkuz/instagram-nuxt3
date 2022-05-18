<script lang="ts" setup>
import IconBase from "~~/components/Nav/IconBase.vue";
interface IconProps {
  isSelect: boolean;
}

const props = defineProps<IconProps>();
</script>

<template>
  <IconBase>
    <svg
      v-if="isSelect"
      aria-label="Search and explore"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 48 48"
      width="24"
    >
      <path
        d="M47.6 44L35.8 32.2C38.4 28.9 40 24.6 40 20 40 9 31 0 20 0S0 9 0 20s9 20 20 20c4.6 0 8.9-1.6 12.2-4.2L44 47.6c.6.6 1.5.6 2.1 0l1.4-1.4c.6-.6.6-1.6.1-2.2zM20 35c-8.3 0-15-6.7-15-15S11.7 5 20 5s15 6.7 15 15-6.7 15-15 15z"
      ></path></svg
    ><svg
      v-else
      aria-label="Search and explore"
      class="mb-3"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="16.511"
        x2="22"
        y1="16.511"
        y2="22"
      ></line></svg
  ></IconBase>
</template>
