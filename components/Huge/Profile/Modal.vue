<script lang="ts" setup>
import { useModalPosition } from '~~/composables/useModalPosition'
import { useLockScroll } from '~~/composables/useLockScroll'
import { useProfileStore } from '~~/store/profile'
const { x, y } = useModalPosition()
const boxRef = ref(null)
const profileStore = useProfileStore()
useClickOutSide(boxRef, () => {
  profileStore.setIsShowFollowing(false)
})
useLockScroll()

watch([x, y], () => {
  boxRef.value.style.top = y.value - 250 + 'px'
  boxRef.value.style.left = 935 / 2 - 200 + 'px'
})
</script>

<template>
  <div ref="boxRef" class="absolute h-[500px] w-[400px] rounded-[16px] bg-fuchsia-600"></div>
</template>
