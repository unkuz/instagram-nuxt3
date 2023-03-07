<script lang="ts" setup>
import { SizeAvatarEnum } from '@/type'
import Avatar from '@/components/Atoms/Avatar.vue'
</script>
<template>
  <div class="h-[500px] w-full bg-red-300">
    <div class="mt-[26px] mb-[22px] flex h-[56px] items-center justify-between">
      <Avatar :size="SizeAvatarEnum.M" skeleton />

      <div class="-ml-[70px]">
        <AtomsTagName skeleton name=" " />
        <p class="text-c3 dark:text-c21">{{ 'dsf' }}</p>
      </div>
      <div>
        <NuxtLink to="/auth">
          <AtomsButton class="!bg-c15 py-[6px] text-[.8rem] text-c1" text="Log out" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
