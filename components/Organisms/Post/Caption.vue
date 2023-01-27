<script setup lang="ts">
import TagName from '~~/components/Atoms/TagName.vue'
import { REGEX } from '@@/utils'

interface IProps {
  userName: string
  captionContent: string
  tags: string[]
}

const { captionContent, tags } = defineProps<IProps>()

// const captionContentAfter = computed(() => {
//   const arr = [...captionContent.matchAll(REGEX.url)]
//   console.log({arr});
// })

// onMounted(()=>{
//     const arr = [...captionContent.matchAll(REGEX.url)]
//   console.log({arr});
// })

const hasCaptionOrTag = $computed(() => {
  if (captionContent.trim() === '' || tags.length === 0) {
    return false
  }
  return true
})
</script>

<template>
  <div>
    <TagName :name="userName" />
    <div v-if="hasCaptionOrTag" class="mt-[5px] py-[5px] md:text-[0.85rem]">
      <p class="whitespace-pre-line">{{ captionContent }}</p>
      <div class="mt-[3px] flex flex-wrap gap-[8px]">
        <NuxtLink
          v-for="(i, idx) in tags"
          :key="idx"
          :to="`/explore/tags/${i}`"
        >
          <div class="text-purple-500" title="tag">
            {{ `#${i}` }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
