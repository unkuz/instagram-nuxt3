<script lang="ts" setup>
import Square from '@@/components/Explore/Square.vue'

interface IProps {
    cluster: string[] | undefined[]
}
defineProps<IProps>()

const random = $ref(Math.random())
</script>

<template>
    <div>
        <div
            v-if="random < 1 / 3"
            class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]"
        >
            <Square is-big :img="cluster[0]" />
            <Square :img="cluster[1]" />
            <Square :img="cluster[2]" />
        </div>

        <div
            v-else-if="random > 2 / 3"
            class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]"
        >
            <Square :img="cluster[0]" />
            <Square is-big :img="cluster[1]" />
            <Square :img="cluster[2]" />
        </div>
        <div
            v-else
            class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]"
        >
            <Square :img="cluster[0]" />
            <Square :img="cluster[1]" />
            <Square :img="cluster[2]" />
        </div>
    </div>
</template>
