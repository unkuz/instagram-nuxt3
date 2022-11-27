<script setup lang="ts">
import Button from '@@/components/Tiny/Button.vue';
import clsx from 'classnames';

interface IProps {
    userName: string;
    captionContent: string;
    tags: Array<string>
}

const { captionContent, tags } = defineProps<IProps>()

const hasCaptionOrTag = computed<boolean>(() => {
    if (captionContent.trim() === '' || tags.length === 0) {
        return false
    }
    return true
})
</script>

<template>
    <div>
        <div class="inline-block bg-[#000000] px-[10px] py-[1px] text-[#ffffff] shadow-md">
            {{ userName }}
        </div>
        <div class="mt-[5px]  py-[5px]" v-if="hasCaptionOrTag">
            <div>{{ captionContent }}</div>
            <div class=" flex flex-wrap gap-[8px] mt-[5px]">
                <NuxtLink :to="`/explore/tags/${i}`" v-for="(i, idx) in tags" :key="idx">
                    <div class="text-purple-500" title="tag">{{ `#${i}` }}</div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>