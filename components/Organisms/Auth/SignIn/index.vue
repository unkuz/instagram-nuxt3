<script lang="ts" setup>
import { useAuthStore } from '~~/store'
import Input from './../Common/Input.vue'

const authStore = useAuthStore()

const state = reactive({
  user_name: '',
  password: '',
})

const submit = () => {
  authStore.login({ ...state })
}
</script>
<template>
  <div>
    <Input name="Username" :value="state.user_name" @input="(val) => (state.user_name = val)" />
    <Input name="Password" :value="state.password" @input="(val) => (state.password = val)" />

    <button
      @click="submit"
      class="mx-auto mt-[10px] flex h-[50px] w-[250px] items-center justify-center rounded-2xl bg-c15"
    >
      Continue
    </button>
  </div>
</template>
