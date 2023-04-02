<script lang="ts" setup>
import { SCHEMA_AUTH } from '@/utils'
import { Form } from 'vee-validate'
import { useAuthStore } from '@/store'
import Input from './../Common/Input.vue'

const authStore = useAuthStore()

const isPending = $computed(() => authStore.pending)

const submit = (val: any) => {
  const { user_name, password } = val
  authStore.create({
    user_name,
    password,
  })
}
</script>
<template>
  <div>
    <Form @submit="submit" :validation-schema="SCHEMA_AUTH.SIGNUP">
      <Input name="user_name" place-holder="User name" />
      <Input name="password" place-holder="Password" type="password" />
      <Input name="re_password" place-holder="Re Password" type="password" />

      <button
        @click="submit"
        :class="[
          'skeleton-btn mx-auto mt-[10px] flex h-[50px] w-[250px] items-center justify-center rounded-2xl bg-c15 dark:text-c1',
          {
            'skeleton ': isPending,
          },
        ]"
      >
        Continue
      </button>
    </Form>
  </div>
</template>
