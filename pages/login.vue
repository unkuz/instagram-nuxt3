<script lang="ts" setup>
import { useAuthStore } from '@/store'
import { IAccountLogin } from '@/type'
import { ErrorMessage, Field, Form } from 'vee-validate'

definePageMeta({
  layout: 'empty',
})

const authStore = useAuthStore()

const isLogin = computed(() => authStore.data.isLogin)

useWatchWithMounted(isLogin, () => {
  if (isLogin.value) {
    navigateTo('/')
  }
})

const submit = (data: any) => {
  authStore.login(_pick(data as IAccountLogin, ['user_name', 'password']))
}

const messageErrorServer = $computed(()=>authStore?.errors?.detail)

const schemaValidate = {
  user_name(val: any) {
    return true
  },
  password(val: any) {
    return true
  },
}
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div class="flex w-[200px] flex-col gap-[20px]">
      <Form @submit="submit" :validation-schema="schemaValidate" class="flex flex-col gap-[10px]">
        <Field name="user_name" class="bg-red-300" />
        <ErrorMessage name="user_name" />
        <Field name="password" type="password" class="bg-red-300" />
        <ErrorMessage name="password" />
        <button>Login</button>
      </Form>

       <p class="text-[0.85rem] text-c13">{{messageErrorServer}}</p>
    </div>
  </div>
</template>
