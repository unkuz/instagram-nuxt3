<script setup lang="ts">
import Avatar from '~~/components/Atoms/Avatar.vue'
import { SizeAvatarEnum } from '~~/type'
interface IProps {
  isReply: boolean
}
withDefaults(defineProps<IProps>(), {
  isReply: false,
})
</script>
<template>
  <div class="mb-[20px] flex items-end gap-[10px]">
    <Avatar
      :class="['w-[30px]', isReply ? 'opacity-100' : 'opacity-0']"
      url="/image/91480011.jpg"
    />

    <div :class="['rounded-2xl  p-[12px]', isReply ? 'bg-gray-200' : 'bg-blue-500 text-white']">
      You define your project’s breakpoints in the theme.screens section of your tailwind.config.js
      file. The keys become your responsive modifiers (like md:text-center), and the values are the
      min-width where that breakpoint should start.
    </div>
  </div>
</template>
