<script lang="ts" setup>
interface IconProps {
  isSelect: boolean
}
const props = defineProps<IconProps>()
</script>

<template>
  <div class="select-none">
    <div
      :class="`rounded-full  p-[1px] ${isSelect ? 'bg-black' : 'bg-white'} sm:hover:cursor-pointer`"
    >
      <div class="rounded-full bg-white p-[1px]">
        <img
          crossorigin="anonymous"
          data-testid="user-avatar"
          draggable="false"
          class="h-[24px] w-[24px] rounded-full object-cover"
          src="/image/avatar.jpg"
        />
      </div>
    </div>
  </div>
</template>
