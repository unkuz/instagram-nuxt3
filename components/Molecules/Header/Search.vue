<script lang="ts" setup>
import SearchIcon from '@/assets/svg/search_icon_2367fdg.svg'
import { useSearchStore } from '@/store'
import { onClickOutside } from '@vueuse/core'

const searchStore = useSearchStore()
const searchRef = ref<HTMLInputElement>()
const inputSearch = $ref<HTMLInputElement>()
const isSearchActive = $computed(() => searchStore.isFocus)
const isSearchHaveValue = $computed(() => searchStore.getIsSearchHaveValue)

watch(
  () => isSearchActive,
  (state) => {
    if (state) {
      inputSearch?.focus()
    }
  }
)

onClickOutside(searchRef, () => {
  searchStore.setIsFocus(false)
})
</script>

<template>
  <div
    ref="searchRef"
    class="relative flex h-[36px] w-[268px] cursor-text items-center rounded-md bg-c4/50 px-[16px] dark:bg-c23/50"
    @click="searchStore.setIsFocus(true)"
  >
    <SearchIcon v-show="!isSearchActive" class="[&>path]:stroke-black [&>path]:dark:stroke-white" />
    <span
      v-show="!isSearchActive && !isSearchHaveValue"
      class="absolute top-1/2 left-[45px] -translate-y-1/2 text-sm dark:text-c1"
      >Search</span
    >
    <input
      ref="inputSearch"
      v-model="searchStore.value"
      type="text"
      :class="[
        'absolute top-1/2  left-1/2 h-[30px] w-[90%] -translate-x-1/2 -translate-y-1/2 bg-transparent text-sm caret-c7 focus:outline-none',
        {
          'w-[72%]': !isSearchActive,
        },
      ]"
    />
  </div>
</template>
