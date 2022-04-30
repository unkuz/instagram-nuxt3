<script lang="ts" setup>
import { useDebounce } from "~~/composables/useDebounce";
const search = ref("");
const a = ref(0);
const result = useDebounce(search, 1.5);
</script>

<template>
  <input type="text" v-model="search" />
  <p>{{ result }}</p>
  <p>{{ a }}</p>
  <p>{{ search }}</p>
  <button @click="a++">อย่าไปมีเเฟนนะ</button>
</template>
