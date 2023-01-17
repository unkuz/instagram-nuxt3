import { Ref } from 'vue'

export const useWatchWithMounted = (
    dependency: Ref<any>,
    callback: Function
) => {
    onMounted(() => {
        callback()
    })

    watch(dependency, () => {
        callback()
    })
}
