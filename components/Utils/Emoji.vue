<script lang="ts" setup>
import { EMOJI } from '@@/constants'

defineEmits(['emoji-add'])
</script>

<template>
  <div>
    <div
      class="absolute -top-[310px] -left-[16px] h-[300px] overflow-y-scroll border-[1px] border-c4 bg-c1 dark:border-c20 dark:bg-c19"
    >
      <div v-for="({ label, icons }, idx) in EMOJI" :key="idx">
        <p class="mt-[10px] h-[20px] pl-[10px] text-[0.8rem] font-[500]">
          {{ label }}
        </p>
        <div class="grid w-[280px] grid-cols-7 text-[1.5rem]">
          <div
            v-for="(icon, idx) in icons"
            :key="idx"
            class="flex h-[40px] cursor-pointer select-none items-center justify-center"
            @click="$emit('emoji-add', icon)"
          >
            {{ icon }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
