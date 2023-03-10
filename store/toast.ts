import { defineStore } from 'pinia'

export enum ToastTypeEnum {
  ERROR,
  WARNING,
  SUCCESS,
  NONE,
}

interface IPushPayload {
  type: ToastTypeEnum
  content: string
}

export const useToastStore = defineStore('toast', {
  state: () => ({
    isShow: false,
    type: ToastTypeEnum.NONE,
    content: '',
  }),
  getters: {},
  actions: {
    toggle(val: boolean) {
      if (_isBoolean(val)) {
        let timer: NodeJS.Timer | '' = ''
        this.isShow = val
        if (val) {
          timer = setTimeout(() => (this.isShow = false), 1000)
        } else {
          clearTimeout(timer)
        }
      }
    },
    push(data: IPushPayload) {
      this.isShow = false
      const { type, content } = data

      if ([...Object.values(ToastTypeEnum)].includes(type) && _isString(content)) {
        this.type = type
        this.content = content
        this.isShow = true
      }
    },
    pushTimmer(data: IPushPayload, time = 10 * 1000) {
      this.isShow = false
      const { type, content } = data

      if ([...Object.values(ToastTypeEnum)].includes(type) && _isString(content)) {
        this.type = type
        this.content = content
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        }, time)
      }
    },
  },
})
