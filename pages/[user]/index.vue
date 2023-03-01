<script lang="ts" setup>
import Avatar from '@/components/Atoms/Avatar.vue'
import TagName from '@/components/Atoms/TagName.vue'
import { axios } from '@/services/axios'
import { useAuthStore, useProfileStore } from '@/store'
import { SizeAvatarEnum } from '@/type'
import { APP_API } from '~~/apis'

const route = useRoute()
const profileStore = useProfileStore()

const { data: _profile, pending: pendingTimeline } = await useLazyAsyncData<any>(
  'profile',
  async () => {
    const res = await axios.get(APP_API.USER.detail, {
      params: {
        user_name: route.params.user,
      },
    })
    return res.data
  }
)

profileStore.save(_profile.value)


const profile = $computed(() =>  profileStore.profile)

onBeforeUnmount(()=>{
    profileStore.$reset()
})
</script>

<template>
  <div v-if="!pendingTimeline" class="relative mb-[65px] text-sm">
    <div class="relative h-[250px]">
      <div
        class="absolute h-full w-full cursor-pointer bg-cover bg-center object-cover"
        :style="{ backgroundImage: `url(${profile?.cover_pic_url})` }"
      />
      <Avatar
        :size="SizeAvatarEnum.L"
        :url="profile?.profile_pic_url"
        class="absolute top-[67%] left-1/2 -translate-x-1/2 border-[5px] border-c1 md:top-[60%] md:left-[3%] md:h-[140px] md:w-[140px] md:translate-x-0"
      />
    </div>
    <div>
      <div class="mt-[50px] flex flex-col items-center md:ml-[180px] md:mt-[5px] md:block">
        <TagName :name="profile?.user_name" />
        <div class="flex space-x-[20px]">
          <!-- <span>96 posts</span
          ><span class="cursor-pointer" @click="profileStore.setIsShowFollowing(true)"
            >38.8k followers</span
          ><span class="cursor-pointer" @click="profileStore.setIsShowFollowing(true)"
            >150 following</span
          > -->
        </div>
      </div>
    </div>
    <div class="mt-[20px] flex flex-col items-center justify-center">
      <div>{{ profile?.bio }}</div>
      <div></div>
    </div>
    <div class="mt-[20px] flex justify-around">
      <!-- <div @click="profileStore.setSelect(SELECT_TYPE.ALL)">
        <PostIcon_ v-if="currentSelect == SELECT_TYPE.ALL" />
        <PostIconSelected_ v-else />
      </div> -->
      <!-- <div @click="profileStore.setSelect(SELECT_TYPE.REELS)">
        <ReelIcon_ v-if="currentSelect == SELECT_TYPE.REELS" />
        <ReelIcon_ v-else class="color-[#00aeff] fill-[#00aeff]" />
      </div>

      <div @click="profileStore.setSelect(SELECT_TYPE.TAG)">
        <TagIcon_ v-if="currentSelect == SELECT_TYPE.TAG" />
        <TagIconSelected_ v-else />
      </div> -->
    </div>
    <div class="mt-[20px] grid grid-cols-3 gap-[5px]">
   
    </div>
    <!-- <Modal v-if="isShowFollowing" /> -->
  </div>
</template>
