<template>
    <div>
        <div v-for="(i, idx) of 10" :key="idx" ref="itemRefs">{{ idx }}</div>
    </div>
</template>

<script setup lang="ts">
let itemRefs = ref<HTMLDivElement[]>()

onMounted(() => {
    console.log('ITEM REF LISR', itemRefs.value)
})
</script>

<style scoped></style>
