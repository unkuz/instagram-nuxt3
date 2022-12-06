import { Ref } from 'vue'

export const useWatchWithMounted = (dependency: Ref<any> | Function, callback: Function) => {
  onMounted(() => {
    callback()
  })
  watch(dependency, () => {
    callback()
  })
}
