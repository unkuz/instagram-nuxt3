<script setup lang="ts">
import { createAvatar } from '@dicebear/core'
import { adventurer } from '@dicebear/collection'

const avatar = createAvatar(adventurer, {
  // ... options
})

const svg = await avatar.toDataUri()
</script>
<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <img class="h-[50px] w-[50px]" :src="svg" />
  </div>
</template>
