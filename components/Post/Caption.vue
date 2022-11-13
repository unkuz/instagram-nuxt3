<script setup lang="ts">
import Button from '@@/components/Tiny/Button.vue';
import clsx from 'classnames';

interface IProps {
    userName: string;
    captionContent: string;
    tags: Array<string>
}

const { captionContent, tags } = defineProps<IProps>()

const hasCaptionOrTag = computed(() => {
    if (captionContent.trim() === '' || tags.length === 0) {
        return false
    }
    return true
})
</script>

<template>
    <div>
        <div class="inline-block bg-gray-500 px-[10px] py-[1px] text-white">
            {{ userName }}
        </div>
        <div class="mt-[5px] bg-gray-100/60 py-[5px]" v-if="hasCaptionOrTag">
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