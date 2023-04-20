<script setup lang="ts">
interface IProps {
  name?: string
  pending?: boolean
}

withDefaults(defineProps<IProps>(), {
  name: '',
  pending: false,
})
</script>
<template>
  <p
    :class="[
      '!inline-block bg-c2 px-[8px] py-[4px] text-[.8rem]/[.8rem] text-c1  dark:bg-c1 dark:text-c2 md:py-[4px] md:text-[.875rem]/[.875rem]',
      {
        'skeleton !h-[21px] !w-[80px]': pending,
      },
    ]"
  >
    {{ pending ? '' : name.trim() }}
  </p>
</template>
