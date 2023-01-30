<script lang="ts" setup></script>

<template>
  <div>
    <div class="absolute inset-0 z-40 flex items-center justify-center bg-violet-200 transition" />
  </div>
</template>
<style scoped>
.transition {
  animation: transition 1s linear infinite;
}

@keyframes transition {
  0% {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
  10% {
    clip-path: polygon(82% 0, 100% 0, 100% 100%, 68% 100%);
  }
  20% {
    clip-path: polygon(65% 0, 100% 0, 100% 100%, 44% 100%);
  }
  30% {
    clip-path: polygon(24% 0, 100% 0, 100% 100%, 10% 100%);
  }
  40% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  60% {
    clip-path: polygon(0 0, 95% 0, 75% 100%, 0 100%);
  }
  80% {
    clip-path: polygon(0 0, 59% 0, 30% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
}
</style>
