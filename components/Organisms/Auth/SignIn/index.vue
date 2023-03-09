<script lang="ts" setup>
import { Form } from 'vee-validate'

import { useAuthStore } from '~~/store'
import Input from './../Common/Input.vue'

const authStore = useAuthStore()

const schema = {
  user_name(value) {
    return true
  },
  password(value) {
    return true
  },
}

const submit = (val: any) => {
  authStore.login({ ...val })
}
</script>
<template>
  <div>
    <Form @submit="submit" :validation-schema="schema">
      <Input name="user_name" place-holder="User name" />
      <Input name="password" place-holder="Password" />
      <button
        @click="submit"
        class="mx-auto mt-[10px] flex h-[50px] w-[250px] items-center justify-center rounded-2xl bg-c15"
      >
        Continue
      </button>
    </Form>
  </div>
</template>
