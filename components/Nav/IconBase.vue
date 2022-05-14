<script lang="ts" setup>
export interface IconProps {
  isHidden?: boolean;
  to?: string;
}
const props = defineProps<IconProps>();
</script>

<template>
  <NuxtLink :to="props.to">
    <div
      v-if="props.isHidden"
      class="h-[24px] w-[24px] md:block md:hover:cursor-pointer"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
