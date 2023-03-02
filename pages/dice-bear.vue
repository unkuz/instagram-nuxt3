<script setup lang="ts">

import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

const avatar = createAvatar(adventurer, {
  // ... options
});

const svg = await avatar.toDataUri();


console.log("svg",svg);
</script>
<template>
    <div class="flex justify-center items-center w-screen h-screen">
        <img class="w-[50px] h-[50px]" :src="svg" />
   
    </div>
</template>



