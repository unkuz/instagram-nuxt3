
<script setup>
import LoadingIcon_ from '@@/assets/svg/Ripple-1s-200px.svg';
import BackDrop from '@@/components/Utils/BackDrop.vue'

const nuxtApp = useNuxtApp()

const isShow = ref(false)

nuxtApp.hook('page:start', () => { isShow.value = true })
nuxtApp.hook('page:finish', () => { isShow.value = false })

</script>
<template>
    <div v-show="isShow">
        <BackDrop>
            <LoadingIcon_ class="w-[250px] !bg-transparent" />
        </BackDrop>
    </div>
</template>
