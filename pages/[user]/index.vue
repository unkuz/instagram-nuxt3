<script lang="ts" setup>
import TopBarSm from '@/components/Molecules/TopBarSm.vue'
import Profile from '@/components/Organisms/Profile/index.vue'
import { axios } from '@/services/axios'
import { APP_API } from '@/apis'
import { useProfileStore } from '@/store'
import { useFeedUserStore } from '@/store/feed-user'
import NotFound from '@/components/Utils/NotFound.vue'

definePageMeta({
  middleware: 'auth',
})

const route = useRoute()
const router = useRouter()

const profileStore = useProfileStore()
const feedUserStore = useFeedUserStore()

const { data, pending } = await useLazyAsyncData<any>('profile', async () => {
  const res = await axios.get(APP_API.USER.detail, {
    params: {
      user_name: route.params.user,
    },
  })
  return res.data
})

watchEffect(() => {
  profileStore.save(data.value)
})

onBeforeUnmount(() => {
  profileStore.$reset()
})

const isNotFound = $computed(() => _isEmpty(profileStore.data) && pending)
</script>

<template>
  <div>
    <TopBarSm text="cuzknothz" @back="router.push('/')">
      <div>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          class="fill-c1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>menu_fill</title>
          <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Editor" transform="translate(-1248.000000, -48.000000)" fill-rule="nonzero">
              <g id="menu_fill" transform="translate(1248.000000, 48.000000)">
                <path
                  d="M20,17.5 C20.8284,17.5 21.5,18.1716 21.5,19 C21.5,19.7796706 20.9050879,20.4204457 20.1444558,20.4931332 L20,20.5 L4,20.5 C3.17157,20.5 2.5,19.8284 2.5,19 C2.5,18.2203294 3.09488554,17.5795543 3.85553954,17.5068668 L4,17.5 L20,17.5 Z M20,10.5 C20.8284,10.5 21.5,11.1716 21.5,12 C21.5,12.8284 20.8284,13.5 20,13.5 L4,13.5 C3.17157,13.5 2.5,12.8284 2.5,12 C2.5,11.1716 3.17157,10.5 4,10.5 L20,10.5 Z M20,3.5 C20.8284,3.5 21.5,4.17157 21.5,5 C21.5,5.82843 20.8284,6.5 20,6.5 L4,6.5 C3.17157,6.5 2.5,5.82843 2.5,5 C2.5,4.17157 3.17157,3.5 4,3.5 L20,3.5 Z"
                  id="形状"
                  fill="white"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </TopBarSm>
    <NotFound v-if="isNotFound" />
    <Profile v-else :pending="pending" class="mt-[60px] md:mt-0" />
  </div>
</template>
