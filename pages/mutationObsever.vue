<template>
    <div>
        <textarea ref="inputEl" :hehe="hehe" />
    </div>

    <button @click="hehe = !hehe">click</button>
</template>

<script setup lang="ts">
const inputEl = ref<HTMLInputElement>()
let hehe = $ref(true)

let inputElementObserver: MutationObserver | null = null

onMounted(() => {
    inputElementObserver = new MutationObserver(() => console.log('HEHE'))

    inputElementObserver.observe(inputEl.value!, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
    })
})
</script>

<style scoped></style>
