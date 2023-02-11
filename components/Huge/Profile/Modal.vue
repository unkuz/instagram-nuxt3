<script lang="ts" setup>
import { useLockScroll, useModalPosition } from '@/composables'
import { useProfileStore } from '@/store'
import { onClickOutside } from '@vueuse/core'

const profileStore = useProfileStore()
const boxRef = ref<HTMLDivElement>()

const { x, y } = useModalPosition()

useLockScroll()

onClickOutside(boxRef, () => {
  profileStore.setIsShowFollowing(false)
})

watch([x, y], () => {
  const boxEl = unref(boxRef)
  boxEl!.style.top = y.value - 250 + 'px'
  boxEl!.style.left = 935 / 2 - 200 + 'px'
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
          <div class="aspect-square h-[50px] w-[50px] rounded-[50%] bg-yellow-200" />
        </div>
      </div>
    </div>
  </div>
</template>
