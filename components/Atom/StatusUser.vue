<script lang="ts" setup>
import clsx from 'classnames'

interface IProps {
  isActive?: boolean
}

defineProps<IProps>()
</script>

<template>
  <div
    :class="
      clsx('h-[6px] w-[6px] rounded-[50%] bg-c6', {
        'bg-c1': !isActive,
      })
    "
  ></div>
</template>
