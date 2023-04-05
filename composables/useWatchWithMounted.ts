import { Ref } from 'vue'

/**
 * This function uses the onMounted and watch hooks in Vue.js to execute a callback function when a
 * dependency changes and when the component is mounted.
 * @param {any} dependency - The dependency parameter is a value or a reactive object that the watch
 * function will be watching for changes. When the value of the dependency changes, the watch function
 * will be triggered and the callback function will be executed.
 * @param {Function} callback - The `callback` parameter is a function that will be executed whenever
 * the `dependency` parameter changes or when the component is mounted.
 */
export const useWatchWithMounted = (dependency: any, callback: Function) => {
  onMounted(() => {
    callback()
  })

  watch(dependency, () => {
    callback()
  })
}
