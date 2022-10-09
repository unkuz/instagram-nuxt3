<script lang="ts" setup>
import { useLockScroll } from '~~/composables/useLockScroll'
import { useModalPosition } from '~~/composables/useModalPosition'
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
  <div ref="boxRef" class="Z-50 absolute h-[500px] w-[400px] rounded-[16px] bg-gray-200">
    <div class="flex h-[50px] items-center justify-center border-b-[1px] border-gray-300">
      Following
    </div>
    <div class="mx-[30px] h-full bg-red-300">
      <div class="flex h-[60px] items-center justify-between rounded-[15px] bg-fuchsia-100">
        <div class="mx-auto w-[90%]">
          <div class="aspect-square h-[50px] w-[50px] rounded-[50%] bg-yellow-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>
