<script lang="ts" setup>
import SearchIcon from '@/assets/svg/search_icon_2367fdg.svg'
import { onClickOutside } from '@vueuse/core'

interface IProps {
  isFocus: boolean
}

const props = defineProps<IProps>()
const value = defineModel<string>()

const emit = defineEmits(['update:is-focus'])

const searchRef = ref<HTMLInputElement>()
const inputRef = $ref<HTMLInputElement>()

watch(
  () => props.isFocus,
  (val) => {
    if (val) inputRef?.focus()
  }
)

const updateIsFocus = (val: boolean) => emit('update:is-focus', val)

onClickOutside(searchRef, () => updateIsFocus(false))
</script>

<template>
  <div
    ref="searchRef"
    class="relative flex cursor-text items-center rounded-[8px] bg-c4/50 px-[16px] dark:bg-c23/50"
    @click="updateIsFocus(true)"
  >
    <SearchIcon class="[&>path]:stroke-black [&>path]:dark:stroke-white" />

    <input
      ref="inputRef"
      v-model="value"
      type="text"
      placeholder="Search"
      :class="[
        'absolute left-[40px] top-1/2 h-[30px] w-[calc(100%-40px-16px)] -translate-y-1/2  bg-transparent text-sm caret-c7 focus:outline-none',
      ]"
    />
  </div>
</template>
