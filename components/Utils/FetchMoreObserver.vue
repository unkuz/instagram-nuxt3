<script lang="ts" setup>
let observer: IntersectionObserver

const el = $ref<HTMLDivElement>()

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log('NEED LOAD MORE DATA')
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
  <div ref="el" class="h-[10px] w-[10px] bg-black mx-auto"></div>
</template>
