<script lang="ts" setup>
import Input from './../Common/Input.vue'

const state = reactive({
  user_name: '',
  password: '',
})
</script>
<template>
  <div>
    <Input name="Username" v-model="state.user_name" />
    <Input name="Password" v-model="state.password" />
  </div>
</template>
