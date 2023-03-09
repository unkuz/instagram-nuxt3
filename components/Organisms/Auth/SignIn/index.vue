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
const { signIn, status, signOut } = useSession()

const mySignInHandler = async ({ username, password }: { username: string; password: string }) => {
  const { error, url } = await signIn('credentials', { username, password, callbackUrl:'/_' })
  if (error) {
    // Do your custom error handling here
    alert('You have made a terrible mistake while entering your credentials')
  } else {
    // No error, continue with the sign in, e.g., by following the returned redirect:
    return navigateTo(url)
  }
}

const submit = (val: any) => {
  // authStore.login({ ...val })
  mySignInHandler({
    username: val.user_name,
    password: val.password,
  })
}
</script>
<template>
  <div>
    <Form @submit="submit" :validation-schema="schema">
      {{ status }}
      <button @click="signOut">signOut</button>
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

