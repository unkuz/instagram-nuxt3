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
  <div ref="boxRef" class="absolute h-[500px] w-[400px] rounded-[16px] bg-gray-200 Z-50">
    <div class="h-[50px] border-b-[1px] border-gray-300 flex justify-center items-center">Following</div>
    <div class="h-full bg-red-300 mx-[30px]">
      <div class="h-[60px] bg-fuchsia-100 rounded-[15px]  flex justify-between items-center">
        <div class="w-[90%] mx-auto"> <div class="h-[50px] w-[50px] aspect-square bg-yellow-200 rounded-[50%]"></div></div>
       
      </div>
    </div>
  </div>
</template>
