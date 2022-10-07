<script lang="ts" setup>
import SearchIcon from '~~/assets/svg/search_icon_2367fdg.svg'
import { useClickOutSide } from '~~/composables/useClickOutSide'
import { useSearchStore } from '~~/store/search'

const searchStore = useSearchStore()
const searchRef = ref(null)
const inputSearch = ref(null)
const searchValue = computed(() => searchStore.getValue)
const isSearchActive = computed(() => searchStore.isFocus)
const isSearchHaveValue = computed(() => searchStore.getIsSearchHaveValue)

watch(isSearchActive, (state) => {
  state ? inputSearch.value.focus() : ''
})

watch([isSearchHaveValue, isSearchActive], () => {
  if (isSearchActive.value) {
    inputSearch.value.style.left = '46%'
    inputSearch.value.style.width = '221px'
  } else {
    inputSearch.value.style.left = '136px'
    inputSearch.value.style.width = '200px'
  }
})

useClickOutSide(searchRef, () => {
  searchStore.setIsFocus(false)
})

const setActiveSearchInput = () => {
  searchStore.setIsFocus(true)
}

const closeSearch = (e: MouseEvent) => {
  e.stopPropagation()
  searchStore.clearValue()
  searchStore.setIsFocus(false)
}

const handleInputValueSearch = (e: Event) => {
  searchStore.setValue((e.target as HTMLInputElement).value)
}
</script>

<template>
  <div
    ref="searchRef"
    @click="setActiveSearchInput"
    class="relative flex h-[36px] w-[268px] cursor-text items-center rounded-md bg-gray-200 px-[16px]"
  >
    <SearchIcon v-show="!isSearchActive" />
    <span v-show="!isSearchHaveValue" class="absolute top-1/2 left-[60px] -translate-y-1/2 text-sm"
      >Search</span
    >
    <input
      type="text"
      ref="inputSearch"
      :value="searchValue"
      @input="handleInputValueSearch"
      class="absolute top-1/2 left-1/2 h-[30px] w-[236px] -translate-x-1/2 -translate-y-1/2 bg-transparent text-sm caret-[#09f] focus:outline-none"
    />
    <div class="absolute right-3 cursor-pointer" v-show="isSearchActive" @click="closeSearch">
      <div class="relative h-[18px] w-[18px] rounded-full bg-gray-600">
        <div
          class="absolute top-1/2 left-1/2 h-[8px] w-[2px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 h-[8px] w-[2px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white"
        ></div>
      </div>
    </div>
  </div>
</template>
