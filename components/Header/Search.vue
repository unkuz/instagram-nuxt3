<script lang="ts" setup>
import SearchIcon from '@@/assets/svg/search_icon_2367fdg.svg';
import { useClickOutSide } from '@@/composables';
import { useSearchStore } from '@@/store';
import clsx from 'classnames';

const searchStore = useSearchStore()
const searchRef = ref(null)
const inputSearch = ref(null)
const searchValue = computed(() => searchStore.getValue)
const isSearchActive = computed(() => searchStore.isFocus)
const isSearchHaveValue = computed(() => searchStore.getIsSearchHaveValue)

watch(isSearchActive, (state) => {
  if (state) {
    inputSearch.value.focus()
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
  <div ref="searchRef" @click="searchStore.setIsFocus(true)"
    class="relative flex h-[36px] w-[268px] cursor-text items-center rounded-md bg-gray-200 px-[16px]">
    <SearchIcon v-show="!isSearchActive" />
    <span v-show="!isSearchActive && !isSearchHaveValue"
      class="absolute top-1/2 left-[60px] -translate-y-1/2 text-sm">Search</span>
    <input type="text" ref="inputSearch" :value="searchValue" @input="handleInputSearch" :class="clsx('absolute top-1/2  left-1/2 h-[30px] w-[90%] -translate-x-1/2 -translate-y-1/2 bg-black/20 text-sm caret-[#09f] focus:outline-none', {
      'w-[72%]': !isSearchActive
    })" />
  </div>
</template>
