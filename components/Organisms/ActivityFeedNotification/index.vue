<script setup lang="ts">
import Avatar from '@/components/Atoms/Avatar.vue'
import TimeFromNow from '@/components/Atoms/TimeFromNow.vue'
</script>
<template>
  <div class="mx-auto flex w-full py-[10px] md:w-[484px]">
    <div class="h-[50px] w-[50px]">
      <Avatar class="h-[40px] w-[40px]" />
    </div>
    <div class="flex-1">
      <div class="flex gap-[5px]">
        <AtomsTagName name="abc" />
        <p class="inline-block">joined to 🥕 Final Presentation</p>
      </div>
      <TimeFromNow
        :time="'2023-03-06T16:14:51.305194Z'"
        class="m-[0px_0px_0px_0px] h-[18px] text-c3 dark:text-c21 md:text-[0.8rem]"
      />
    </div>
  </div>
</template>
