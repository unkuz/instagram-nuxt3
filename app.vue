<script lang="ts" setup>
import { useTransition } from "./store/transition";
import { useLockScroll } from "~~/composables/useLockScroll";
const router = useRouter();
const transition = ref(false);
const transitionStore = useTransition();
watch(
  () => transitionStore.isPrepare,
  () => {
    if (transitionStore.isPrepare) {
      console.log("TRIGGER");
      useLockScroll();
    }
  }
);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div
      v-if="transitionStore.isPrepare"
      class="absolute inset-0 z-50 flex animate-pulse items-center justify-center bg-fuchsia-400 opacity-30"
    >
      <div class="h-[200px] w-[200px] animate-spin bg-red-400">KAKA</div>
    </div>
  </div>
</template>
