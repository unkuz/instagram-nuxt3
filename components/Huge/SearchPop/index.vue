<script lang="ts" setup>
import Arrow from "~~/components/Utils/Arrow.vue";
import { useClickOutSide } from "~~/composables/useClickOutSide";

const searchResultRef = ref(null);
const isShow = ref(true);

useClickOutSide(searchResultRef, () => {
  isShow.value = false;
});
</script>

<template>
  <div class="absolute top-0" v-if="isShow" ref="searchResultRef">
    <div class="absolute top-[19px]">
      <Arrow />
    </div>
    <div
      class="shadow-custom absolute right-1/2 top-[55px] z-20 flex h-[350px] w-[375px] translate-x-1/2 items-center overflow-scroll rounded-md border-[1px] border-gray-200 bg-white"
    >
      <p class="w-full text-center text-sm">No results found.</p>
    </div>
  </div>
</template>
<style scoped></style>
