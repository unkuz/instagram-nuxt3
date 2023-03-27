<script setup lang="ts">
import TagName from '@/components/Atoms/TagName.vue'

interface IProps {
  userName: string
  captionContent: string
  tags: string[]
}

const props = defineProps<IProps>()

const hasCaptionOrTag = $computed(() => {
  // if (props.captionContent.trim() === '' || props.tags.length === 0) {
  //   return false
  // }
  return true
})
</script>

<template>
  <div>
    <TagName :name="userName" />
    <div v-if="hasCaptionOrTag" class="mt-[5px] py-[5px] md:text-[0.85rem]">
      <p
        class="whitespace-pre-line [&>a]:text-c7 dark:[&>a]:text-c15"
        v-html="$urlify(captionContent)"
      />
      <div class="mt-[3px] flex flex-wrap gap-[8px]">
        <NuxtLink v-for="(i, idx) in tags" :key="idx" :to="`/explore/tags/${i}`">
          <div class="text-purple-500" title="tag">
            {{ `#${i}` }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
