<script lang="ts" setup>
let observer: IntersectionObserver

const el = $ref<HTMLDivElement>()

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
        }
      })
    },
    {
      threshold: 1,
    }
  )
  observer.observe(el!)
})
</script>

<template>
  <div ref="el" class="mx-auto h-[10px] w-[10px] bg-black"></div>
</template>
