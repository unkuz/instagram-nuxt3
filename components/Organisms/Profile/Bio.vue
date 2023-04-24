<script setup lang="ts">
interface IProps {
  content?: string
  pending?: boolean
}
withDefaults(defineProps<IProps>(), {
  content: '',
  pending: false,
})
</script>

<template>
  <div :class="['line-clamp-3 text-center text-c17 dark:text-c11', { 'skeleton ': pending }]">
    {{ content }}
  </div>
</template>
