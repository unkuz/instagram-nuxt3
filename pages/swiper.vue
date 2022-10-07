<template>
  <div>
    <Swiper>
      <SwiperSlide> <div class="h-[100vh] w-[100px] bg-fuchsia-400"></div></SwiperSlide>
      <SwiperSlide> <div class="h-[100vh] w-[100px] bg-yellow-400"></div></SwiperSlide>
      <SwiperSlide><div class="h-[100vh] w-[100px] bg-blue-500"></div></SwiperSlide>
      <SwiperSlide> <div class="h-[100vh] w-[100px] bg-orange-400"></div></SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<style scoped></style>
