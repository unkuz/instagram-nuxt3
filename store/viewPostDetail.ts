import { useFeedStore } from '@/store'
import { defineStore } from 'pinia'

export const usePostDetailStore = defineStore('post-detail', {
  state: () => ({
    post: {
      created_at: '',
      caption_text: '',
      has_liked: false,
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
      comments: [
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
      ],
      id: '',
      is_seen: '',
      tags: [''],
      like_count: 0,
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
      is_saved: false,
    },
    hasErr: false,
    errors: {},
  }),
  getters: {},
  actions: {
    setPostDetail(id: number) {
      const timeLineStore = useFeedStore()
      this.post = timeLineStore.data.find((i) => i.id === id)
      if (!this.post) {
        this.hasErr = true
      }
    },
    comment(id, { text, userName, userImg, id: commentId }) {
      this.post.comments.unshift({
        text,
        created_at: new Date().getTime(),
        user: {
          pk: '',
          username: userName,
          full_name: '',
          is_private: '',
          profile_pic_url: userImg,
        },
        comment_like_count: 0,
        reply: [],
        id: commentId,
      })
    },
  },
})
