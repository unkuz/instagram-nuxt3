/**
 * This function returns a reactive object that includes a boolean value indicating whether or not to
 * show a prelude.
 * @returns The `usePrelude` function returns an object with a reactive property `isShowPrelude`, which
 * is initially set to `true`. The `onMounted` hook is used to wait for the fonts to be loaded, and
 * then sets `isShowPrelude` to `false`.
 */
export const usePrelude = () => {
  let isShowPrelude = $ref(true)

  onMounted(() => {
    document.fonts.ready.then(() => (isShowPrelude = false))
  })

  return $$({ isShowPrelude })
}
