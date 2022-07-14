<script lang="ts" setup>
interface IProps {
  img: string | undefined | null
  isBig?: boolean
}

defineProps<IProps>()
</script>

<template>
  <div
    v-if="!!img"
    :class="`aspect-square w-full bg-fuchsia-200 ${isBig ? 'col-span-2 row-span-2' : ' '}`"
  >
    <img :src="img ?? ''" :alt="img" class="h-full w-full object-cover" />
  </div>
</template>
