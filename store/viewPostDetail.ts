import { defineStore } from 'pinia'
import { useTimeLineStore } from '@@/store'

const state = () => ({
  post: {
    created_at: '',
    caption_text: '',
    has_liked: '',
    carousel_media: {
      images: [
        {
          id: '',
          src: '',
        },
      ],
      videos: [
        {
          id: '',
          src: '',
        },
      ],
    },
    comments: {
      text: '',
      created_at: '',
      user: {
        pk: '',
        username: '',
        full_name: '',
        is_private: '',
        profile_pic_url: '',
      },
      comment_like_count: '',
      reply: [
        {
          text: '',
          created_at: '',
          user: {
            pk: '',
            username: '',
            full_name: '',
            is_private: '',
            profile_pic_url: '',
          },
          comment_like_count: '',
        },
      ],
    },
    id: '',
    is_seen: '',
    like_count: '',
    location: {
      short_name: '',
    },
    user: {
      id: '',
      username: '',
      full_name: '',
      profile_pic_url: '',
      friendship_status: {
        following: '',
        outgoing_request: '',
      },
    },
  },
  hasErr: false,
  errors: {},
})

const getters = {}

const actions = {
  setPostDetail(id: string) {
    const timeLineStore = useTimeLineStore()
    this.post = timeLineStore.data.find((i) => i.id === id)
    if (!this.post) {
      this.hasErr = true
    }
  },
}

export const useViewPostDetailStore = defineStore('view_post_detail', {
  state,
  getters,
  actions,
})
