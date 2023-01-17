import { defineStore } from 'pinia'
import { IStateStore } from '@@/type'
import { IAuthData } from '@@/models'

type TState = IStateStore<IAuthData>

export const useAuthStore = defineStore('auth', {
    state: (): TState => ({
        data: {
            isLogin: true,
            userName: 'cuzknothz',
            avatar: '/image/91480011.jpg',
            coverImg: '/image/efc566f3-c275-44b3-a1a9-4eb8a361f626.jpg',
            role: '',
        },
        hasErr: false,
        errors: {},
    }),
    getters: {},
    actions: {},
    persist: true,
})
