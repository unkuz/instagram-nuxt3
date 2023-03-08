<script lang="ts" setup>
import Input from './../Common/Input.vue'

const state = reactive({
  user_name: '',
  password: '',
  re_password: '',
})
</script>
<template>
  <div>
    <!-- <Input name="Username" :value="state.user_name" @input="(val) => (state.user_name = val)" />
    <Input name="Password" :value="state.password" @input="(val) => (state.password = val)" />
    <Input
      name="Confirm Password"
      :value="state.re_password"
      @input="(val) => (state.re_password = val)"
    />

    <button
      class="mx-auto mt-[10px] flex h-[50px] w-[250px] items-center justify-center rounded-2xl bg-c15"
    >
      Continue
    </button> -->
  </div>
</template>
