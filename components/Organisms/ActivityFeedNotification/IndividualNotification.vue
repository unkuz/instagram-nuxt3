<script setup lang="ts">
import Avatar from '@/components/Atoms/Avatar.vue'

interface IProps {
  user: Object
  content: string
  created_at: string
}

defineProps<IProps>()
</script>
<template>
  <div class="mx-auto flex w-full gap-[10px] px-[15px] py-[5px] md:w-[484px]">
    <div class="flex h-[50px] w-[50px] items-center justify-center">
      <Avatar class="h-[40px] w-[40px]" />
    </div>
    <div class="flex flex-1 flex-col items-start justify-center">
      <div class="flex gap-[5px]">
        <AtomsTagName name="abc" />
        <p class="inline-block">{{ content }}</p>
      </div>
      <TimeFromNow
        :time="created_at"
        class="m-[0px_0px_0px_0px] h-[18px] text-c3 dark:text-c21 md:text-[0.8rem]"
      />
    </div>
  </div>
</template>
