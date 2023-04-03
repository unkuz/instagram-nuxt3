<script lang="ts" setup>
import SearchPop from '@/components/Huge/SearchPop/index.vue'
import Search from './../Search.vue'

let value = $ref('')
let isFocus = $ref(false)

const isShowSearchResult = $computed(() => isFocus && !!value)
</script>

<template>
  <div>
    <Search
      v-model:value="value"
      v-model:is-focus="isFocus"
      class="h-[36px] w-[240px] lg:w-[268px]"
    />
    <SearchPop v-if="isShowSearchResult" />
  </div>
</template>
