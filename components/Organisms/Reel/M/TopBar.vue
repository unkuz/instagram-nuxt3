<script setup lang="ts">
import Back from '@/components/Atoms/Icon/Back.vue'
import NewPost from '@/components/Atoms/Nav/NewPost.vue'

</script>
<template>
    <div class="fixed text-white top-0 left-0 right-0 w-full h-[60px] flex justify-between items-center bg-transparent z-50 px-[20px]">
       <Back/>
       <div class="uppercase text-[.8rem]">Reels</div>
       <div><NewPost :is-select="false" class=" [&__svg]:text-white "/></div>
    </div>
</template>


