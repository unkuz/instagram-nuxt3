import { Ref } from 'vue'

export const useWatchWithMounted = (dependency: Ref<number | string > | Function, callback: Function) => {
  onMounted(() => {
    callback()
  })

  watch(dependency, () => {
    callback()
  })
}
