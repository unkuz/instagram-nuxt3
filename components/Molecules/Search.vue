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
const inputSearch = $ref<HTMLInputElement>()
const isSearchHaveValue = $computed(() => !!props.value)

watch(
  () => isFocus,
  (state) => {
    if (state) {
      inputSearch?.focus()
    }
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
    <span
      v-show="!isFocus && !isSearchHaveValue"
      class="absolute left-[45px] top-1/2 -translate-y-1/2 text-sm dark:text-c1"
      >Search</span
    >
    <input
      ref="inputSearch"
      :value="value"
      @input="changeVal($event)"
      type="text"
      :class="[
        'absolute left-1/2  top-1/2 h-[30px] w-[90%] -translate-x-1/2 -translate-y-1/2 bg-transparent text-sm caret-c7 focus:outline-none',
        {
          'w-[72%]': !isFocus,
        },
      ]"
    />
  </div>
</template>
