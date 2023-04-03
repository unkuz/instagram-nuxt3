<script lang="ts" setup>
import SearchIcon from '@/assets/svg/search_icon_2367fdg.svg'
import { onClickOutside } from '@vueuse/core'

const props = defineProps<{ value: string; isFocus: boolean }>()

const emit = defineEmits(['update:value', 'update:is-focus'])

const changeVal = (e: Event) => {
  emit('update:value', (e.target as HTMLInputElement).value)
}

let isFocus = $ref(false)

const searchRef = ref<HTMLInputElement>()
const inputRef = $ref<HTMLInputElement>()
const isSearchHaveValue = $computed(() => !!props.value)

watch(
  () => isFocus,
  (state) => {
    if (state) inputRef?.focus()
  }
)

const updateIsFocus = (val: boolean) => emit('update:is-focus', val)

onClickOutside(searchRef, () => updateIsFocus(false))
</script>

<template>
  <div
    ref="searchRef"
    class="relative flex cursor-text items-center rounded-md bg-c4/50 px-[16px] dark:bg-c23/50"
    @click="updateIsFocus(true)"
  >
    <SearchIcon v-show="!isFocus" class="[&>path]:stroke-black [&>path]:dark:stroke-white" />
    <input
      ref="inputRef"
      :value="value"
      @input="changeVal($event)"
      type="text"
      placeholder="Search"
      :class="[
        'absolute left-1/2 top-1/2 h-[30px]  w-[90%] -translate-x-1/2 -translate-y-1/2 !bg-red-300/20 text-sm caret-c7 placeholder:pl-[25px] focus:outline-none',
        {
          'w-[calc(90% -22px)] ml-[22px]': value,
        },
      ]"
    />
  </div>
</template>
