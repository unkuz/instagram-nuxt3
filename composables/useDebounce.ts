/**
 * This is a TypeScript function that listens for clicks outside of a specified HTML element and
 * triggers a callback function when a click occurs outside of that element.
 * @param ref - A reference to a HTMLDivElement or undefined, which is used to determine if the click
 * event occurred outside of the element.
 * @param callback - A function that will be called when a click or touch event occurs outside of the
 * element referenced by the `ref` parameter.
 */
/**
 * This is a TypeScript function that listens for clicks outside of a specified HTML element and
 * triggers a callback function when a click occurs outside of that element.
 * @param ref - A reference to a HTMLDivElement or undefined, which is used to determine if the click
 * event occurred outside of the element.
 * @param callback - A function that will be called when a click or touch event occurs outside of the
 * element referenced by the `ref` parameter.
 */
export function useDebounce(input: string, delayTimeSecond: number) {
  let value = $ref(input)
  let timer: NodeJS.Timer

  onUpdated(() => {
    timer = setTimeout(() => {
      value = input
    }, delayTimeSecond * 1000)
  })

  onBeforeUnmount(() => {
    clearTimeout(timer)
  })

  return value
}
