<script lang="ts" setup>
const hell = ref(true);

let a;
onMounted(() => {
  console.log(document);
  a = setTimeout(() => {
    hell.value = !hell.value;
  }, 3000);
});
onUnmounted(() => {
  clearTimeout(a);
});
</script>

<template>
  <div>
    <div v-if="hell" class="h-[100px] w-[100px] bg-red-300"></div>
  </div>
</template>
