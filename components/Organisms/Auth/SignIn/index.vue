<script lang="ts" setup>
import { Form } from 'vee-validate'
import { object, string } from 'yup'
import { useAuthStore } from '~~/store'
import Input from './../Common/Input.vue'
import { SCHEMA_AUTH } from '@/utils'

const authStore = useAuthStore()

const submit = (val: any) => {
  authStore.login({ ...val })
}
</script>
<template>
  <div>
    <Form @submit="submit" :validation-schema="SCHEMA_AUTH.SIGNIN">
      <Input name="user_name" place-holder="User name" />
      <Input name="password" place-holder="Password" />
      <button
        @click="submit"
        class="mx-auto skeleton-btn mt-[10px] flex h-[50px] w-[250px] items-center justify-center rounded-2xl bg-c15 dark:text-c1"
      >
        Continue
      </button>
    </Form>
  </div>
</template>
