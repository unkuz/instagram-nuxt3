<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'

interface IProps {
  name: string
  placeHolder: string
  type?: string
}

withDefaults(defineProps<IProps>(), { type: 'text' })

const placeHolderRef = $ref<HTMLDivElement>()
</script>

<template>
  <div class="mx-auto w-[250px]">
    <div class="mt-[10px] h-[50px] w-full rounded-2xl bg-c18/10 px-[20px] py-[10px] dark:bg-c2/50">
      <div class="flex h-full w-full items-center justify-between">
        <div class="relative h-full w-full bg-transparent">
          <p
            class="absolute -top-[25px] bottom-1/2 translate-y-1/2 opacity-50"
            ref="placeHolderRef"
          >
            {{ placeHolder }}
          </p>
          <Field
            :name="name"
            :type="type"
            class="full h-full w-full translate-y-[4px] bg-transparent focus:bg-transparent focus:outline-none"
          />
        </div>
      </div>
    </div>
    <ErrorMessage :name="name" class="mx-auto text-[.8rem] text-c13" />
  </div>
</template>
