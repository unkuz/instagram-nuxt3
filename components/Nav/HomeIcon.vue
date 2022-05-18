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
      aria-label="Home"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"
      ></path>
    </svg>
    <svg
      v-else
      aria-label="Home"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2"
      ></path></svg
  ></IconBase>
</template>
