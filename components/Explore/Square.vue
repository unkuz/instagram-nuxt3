<script lang="ts" setup>
interface IProps {
  img: string | undefined | null
}

defineProps<IProps>()
</script>

<template>
  <div v-if="!!img" class="aspect-square w-full bg-fuchsia-200">
    <img :src="img ?? ''" :alt="img" class="h-full w-full object-cover" />
  </div>
</template>
