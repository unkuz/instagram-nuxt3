/**
 * This function calculates the width of the scrollbar in the browser window.
 */
export const getScrollbarWidth = (): number =>
  window.innerWidth - document.documentElement.clientWidth
