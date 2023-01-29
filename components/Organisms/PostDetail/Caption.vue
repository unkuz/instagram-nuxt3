<script setup lang="ts">
interface IProps {
  userName: string
  captionContent: string
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
    <div class="inline-block bg-c2 px-[10px] py-[1px] text-c1 shadow-md dark:bg-c1 dark:text-c2">
      {{ userName }}
    </div>
    <div v-if="hasCaptionOrTag" class="mt-[5px] py-[5px]">
      <div>{{ captionContent }}</div>
      <div class="mt-[5px] flex flex-wrap gap-[8px]">
        <NuxtLink v-for="(i, idx) in tags" :key="idx" :to="`/explore/tags/${i}`">
          <div class="text-purple-500" title="tag">
            {{ `#${i}` }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
