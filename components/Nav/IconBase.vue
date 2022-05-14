<script lang="ts" setup>
interface IconProps {
  isHidden?: boolean;
}
const props = defineProps<IconProps>();
</script>

<template>
  <div
    v-if="props.isHidden"
    class="h-[24px] w-[24px] md:block md:hover:cursor-pointer"
  >
    <slot />
  </div>
</template>
