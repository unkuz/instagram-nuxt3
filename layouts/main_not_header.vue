<script lang="ts" setup>
import Navbarbottom from './navbarbottom.vue'
import Header from '~~/components/Header/index.vue'
const router = useRouter()
const { width } = useResizeWindow()
const isMobileResponsive = computed(() => width.value < 768)
</script>

<template>
  <div>
    <div class="mx-auto mt-[50px] w-full sm:mt-[84px] lg:w-[935px]">
      <slot />
    </div>
    <Navbarbottom />
  </div>
</template>
