<script lang="ts" setup>
import { emoji } from '@@/constants'
</script>

<template>
  <div>
    <div
      class="absolute -top-[310px] -left-[16px] h-[300px] overflow-y-scroll border-[1px] border-c4 dark:border-c20 bg-c1 dark:bg-c19"
    >
      <div v-for="(topic, idx) in emoji" :key="idx">
        <p class="mt-[10px] h-[20px] pl-[10px] text-[0.8rem] font-[500]">{{ topic.label }}</p>
        <div class="grid w-[280px] grid-cols-7 text-[1.5rem]">
          <div
            v-for="(i, idx) in topic.icons"
            :key="idx"
            @click="$emit('emoji-add', i)"
            class="flex h-[40px] cursor-pointer select-none items-center justify-center"
          >
            {{ i }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
