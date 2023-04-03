<script lang="ts" setup>
import { SCHEMA_AUTH } from '@/utils'
import { Form } from 'vee-validate'
import { useAuthStore } from '@/store'
import Input from './../Common/Input.vue'

const authStore = useAuthStore()

const isPending = $computed(() => authStore.pending)

const onSubmit = (val: any) => {
  authStore.login({ ...val })
}
</script>
<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="SCHEMA_AUTH.SIGNIN">
      <Input name="user_name" place-holder="User name" />
      <Input name="password" place-holder="Password" type="password" />
      <button
        :disabled="isPending"
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
