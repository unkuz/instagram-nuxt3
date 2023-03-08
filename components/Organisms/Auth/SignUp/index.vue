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
  re_password(value) {
    return true
  },
}

const submit = (val: any) => {
  const { user_name, password } = val
  console.log('VAL', val)
  authStore.createAccount({
    user_name,
    password,
  })
}
</script>
<template>
  <div>
    <Form @submit="submit" :validation-schema="schema">
      <Input name="user_name" place-holder="User name" />
      <Input name="password" place-holder="Password" />
      <Input name="re_password" place-holder="Re Password" />

      <button
        @click="submit"
        class="mx-auto mt-[10px] flex h-[50px] w-[250px] items-center justify-center rounded-2xl bg-c15"
      >
        Continue
      </button>
    </Form>
  </div>
</template>
