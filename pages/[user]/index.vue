<script lang="ts" setup>
import PostIcon_ from '@@/assets/svg/post_icon.svg'
import PostIconSelected_ from '@@/assets/svg/post_icon_selected.svg'
import ReelIcon_ from '@@/assets/svg/reel_icon.svg'
import TagIcon_ from '@@/assets/svg/tag_icon.svg'
import TagIconSelected_ from '@@/assets/svg/tag_icon_selected.svg'
import Modal from '@@/components/Huge/Profile/Modal.vue'
import Avatar from '@@/components/Tiny/Avatar.vue'
import { SELECT_TYPE } from '@@/constants/screens/account'
import { useAuthStore, useProfileStore } from '@@/store'
import { SizeAvatarEnum } from '@@/type'



const { L } = SizeAvatarEnum
const profileStore = useProfileStore()
const authStore = useAuthStore()
const isShowFollowing = computed(() => profileStore.isShowFollowing)
const isShowFollowers = computed(() => profileStore.isShowFollowers)
const currentSelect = computed(() => profileStore.select)
const avatar = computed(() => authStore.data.avatar)
const coverImg = computed(() => authStore.data.coverImg)

const isSelect = (select) => currentSelect === select
</script>

<template>
  <div class="relative mb-[65px] text-sm">
    <div class="relative h-[250px]">
      <div
        class="absolute h-full w-full cursor-pointer bg-cover bg-center object-cover"
        :style="{ backgroundImage: `url(${coverImg})` }"
      ></div>
      <Avatar
        :size="L"
        :url="avatar"
        className="absolute top-[67%] left-1/2 -translate-x-1/2 border-[5px] border-white md:top-[60%] md:left-[3%] md:h-[140px] md:w-[140px] md:translate-x-0"
      />
    </div>
    <div>
      <div
        class="mt-[50px] flex flex-col items-center duration-500 md:ml-[180px] md:mt-[5px] md:block"
      >
        <div>Cuzknothz</div>
        <div class="flex space-x-[20px]">
          <span>96 posts</span
          ><span @click="profileStore.setIsShowFollowing(true)" class="cursor-pointer"
            >38.8k followers</span
          ><span @click="profileStore.setIsShowFollowing(true)" class="cursor-pointer"
            >150 following</span
          >
        </div>
      </div>
    </div>
    <div class="mt-[20px] flex flex-col items-center justify-center">
      <div>fhdskjafkjsdf</div>
      <div>🍕🤣🤣🤣😂😂</div>
      <div>ฮาโลวีนน็อคภูมิทัศน์คอนเทนเนอร์ คาร์โก้สะบึมบ๊อกซ์เทควันโดวานิลลา</div>
    </div>
    <div class="mt-[20px] flex justify-around">
      <div @click="profileStore.setSelect(SELECT_TYPE.ALL)">
        <PostIcon_ v-if="currentSelect == SELECT_TYPE.ALL" />
        <PostIconSelected_ v-else />
      </div>
      <div @click="profileStore.setSelect(SELECT_TYPE.REELS)">
        <ReelIcon_ v-if="currentSelect == SELECT_TYPE.REELS" />
        <ReelIcon_ class="color-[#00aeff] fill-[#00aeff]" v-else />
      </div>

      <div @click="profileStore.setSelect(SELECT_TYPE.TAG)">
        <TagIcon_ v-if="currentSelect == SELECT_TYPE.TAG" />
        <TagIconSelected_ v-else />
      </div>
    </div>
    <div class="mt-[20px] grid grid-cols-3 gap-[5px]">
      <div class="overflow-hidden">
        <img
          src="/personal/284244344_5311122635605193_5864440318105391567_n.jpg"
          class="aspect-square w-full cursor-pointer overflow-hidden object-cover duration-500 hover:scale-110"
        />
      </div>

      <img
        src="/personal/271827299_648555502866475_6120779624187626708_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/271827299_648555502866475_6120779624187626708_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/285912787_394288332653847_7603823348223049999_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/286080936_5042279369231267_5247065737773824167_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/286156153_1180787169352168_8777747362582813059_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/268574545_1103358217107085_3927417365605344326_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/271238677_756369618655591_3676421268791785883_n.jpg"
        class="aspect-square w-full object-cover"
      />
      <img
        src="/personal/287753802_729800381685105_8924137175535988756_n.jpg"
        class="aspect-square w-full object-cover"
      />
    </div>
    <Modal v-if="isShowFollowing" />
  </div>
</template>
