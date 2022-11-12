<script setup lang="ts">
import clsx from 'classnames';
import Button from '@@/components/Tiny/Button.vue';

interface IProps {
    userName: string;
    captionContent: string;
    tags: Array<string>
}

defineProps<IProps>()
</script>

<template>
    <div>
        <div class="inline-block bg-gray-500 px-[10px] py-[1px] text-white">
            {{ userName }}
        </div>
        <div class="mt-[5px] bg-gray-100/60 py-[5px]">
            <div>{{ captionContent }}</div>
            <div class="mt-[5px] flex flex-wrap gap-[8px]">
                <NuxtLink :to="`/explore/tags/${i}`" v-for="(i, idx) in tags" :key="idx">
                    <Button :text="`#${i}`" :className="clsx('text-[0.8rem] !px-[7px] shadow-md'
                    )" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>



<style scoped>

</style>