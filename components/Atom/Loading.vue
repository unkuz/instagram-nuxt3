
<script setup>
import LoadingIcon_ from '@@/assets/svg/Ripple-1s-200px.svg';

const nuxtApp = useNuxtApp()

const isShow = ref(false)

nuxtApp.hook('page:start', () => { isShow.value = true })
nuxtApp.hook('page:finish', () => { isShow.value = false })

</script>
<template>
    <div v-show="isShow">
        <UtilsBackDrop>
        <LoadingIcon_ class="w-[200px] !bg-transparent" />
        </UtilsBackDrop>
    </div>
</template>
