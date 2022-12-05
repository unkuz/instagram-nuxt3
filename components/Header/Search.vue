<script lang="ts" setup>
import SearchIcon from '@@/assets/svg/search_icon_2367fdg.svg'
import { useClickOutSide } from '@@/composables'
import { useSearchStore } from '@@/store'
import clsx from 'classnames'

const searchStore = useSearchStore()
const searchRef = ref<HTMLInputElement | null>(null)
const inputSearch = ref<HTMLInputElement | null>(null)
const searchValue = computed<string>(() => searchStore.value)
const isSearchActive = computed<boolean>(() => searchStore.isFocus)
const isSearchHaveValue = computed<boolean>(() => searchStore.getIsSearchHaveValue)

watch(isSearchActive, (state) => {
  if (state) {
    inputSearch.value?.focus()
  }
})

useClickOutSide(searchRef, () => {
  searchStore.setIsFocus(false)
})

const handleInputSearch = (e: Event) => {
  searchStore.setValue((e.target as HTMLInputElement).value)
}
</script>

<template>
  <div
    ref="searchRef"
    @click="searchStore.setIsFocus(true)"
    class="relative flex h-[36px] w-[268px] cursor-text items-center rounded-md bg-c4 px-[16px] dark:bg-c23"
  >
    <SearchIcon v-show="!isSearchActive" class="[&>path]:stroke-black [&>path]:dark:stroke-white" />
    <span
      v-show="!isSearchActive && !isSearchHaveValue"
      class="absolute top-1/2 left-[60px] -translate-y-1/2 text-sm dark:text-c1"
      >Search</span
    >
    <input
      type="text"
      ref="inputSearch"
      :value="searchValue"
      @input="handleInputSearch"
      :class="
        clsx(
          'absolute top-1/2  left-1/2 h-[30px] w-[90%] -translate-x-1/2 -translate-y-1/2 bg-transparent text-sm caret-c7 focus:outline-none',
          {
            'w-[72%]': !isSearchActive,
          }
        )
      "
    />
  </div>
</template>
