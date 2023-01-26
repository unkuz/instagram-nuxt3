import { Ref } from 'vue'

export const useWatchWithMounted = (dependency: any, callback: Function) => {
  onMounted(() => {
    callback()
  })

  watch(dependency, () => {
    callback()
  })
}
