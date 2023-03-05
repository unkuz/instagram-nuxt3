<script lang="ts" setup>
import { ToastTypeEnum, useAuthStore, useToastStore } from '@/store'
import { IAccountLogin } from '@/type'
import { ErrorMessage, Field, Form } from 'vee-validate'

const authStore = useAuthStore()
const toastStore = useToastStore()

const isLogin = computed(() => authStore.data.isLogin)

useWatchWithMounted(isLogin, () => {
  if (isLogin.value) {
    navigateTo('/')
  }
})

const submit = (data: any) => {
  authStore.login(_pick(data as IAccountLogin, ['user_name', 'password']))
}

const schemaLogin = {
  user_name(val: any) {
    return true
  },
  password(val: any) {
    return true
  },
}

const schemaCreate = {
  user_name(val: any) {
    return true
  },
  password(val: any) {
    return true
  },
}

let step = $ref(1)

const create = (data: any) => {
  authStore.createAccount(_pick(data as IAccountLogin, ['user_name', 'password']))
}
</script>
<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div class="flex w-[200px] flex-col gap-[20px]">
      <Form
        v-if="step === 1"
        @submit="submit"
        :validation-schema="schemaLogin"
        class="flex flex-col gap-[10px]"
      >
        <Field name="user_name" class="bg-red-300" />
        <ErrorMessage name="user_name" />
        <Field name="password" type="password" class="bg-red-300" />
        <ErrorMessage name="password" />
        <button>Login</button>
      </Form>
      <button @click="step = 2">Create account</button>

      <Form
        v-if="step === 2"
        @submit="create"
        :validation-schema="schemaCreate"
        class="flex flex-col gap-[10px]"
      >
        <Field name="user_name" class="bg-red-300" />
        <ErrorMessage name="user_name" />
        <Field name="password" type="password" class="bg-red-300" />
        <ErrorMessage name="password" />
        <button>Create</button>
      </Form>
    </div>
  </div>
</template>
