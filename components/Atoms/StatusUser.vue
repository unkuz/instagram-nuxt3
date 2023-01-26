<script lang="ts" setup>
interface IProps {
  isActive?: boolean
}

withDefaults(defineProps<IProps>(), {
  isActive: false,
})
</script>

<template>
  <div
    :class="[
      'h-[6px] w-[6px] rounded-[50%] bg-c6',
      {
        'bg-c1': !isActive,
      },
    ]"
  />
</template>
