<script lang="ts" setup>
import { useTodoStore } from "~~/store/todo";

const todo = useTodoStore();
</script>

<template>
  <p>{{ todo.haha }}</p>
  <p @click="todo.changeHaha">LCIK</p>
</template>
