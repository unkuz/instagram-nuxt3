import { useThemeStore } from '~~/store'
import { useWatchWithMounted } from './useWatchWithMounted'

export const useScrollBarTheme = () => {
  const CUZ = '__cuzknothz'
  const themeStore = useThemeStore()

  const styleCss = computed(() => {
    return `
::-webkit-scrollbar-track {
  background: #121212;
}`
  })

  const checkIsCurrentHasStyle = (headTag: HTMLHeadElement) => {
    const lastElIdx = headTag.childNodes.length - 1
    return headTag.childNodes[lastElIdx]?.localName === 'style' &&
      headTag.childNodes[lastElIdx].attributes[0]?.name === CUZ
      ? true
      : false
  }

  const makeStyle = () => {
    const headTag = document.getElementsByTagName('head')[0]

    if (themeStore.darkMode) {
      let el = document.createElement('style')
      el.setAttribute(CUZ, CUZ)
      el.appendChild(document.createTextNode(styleCss.value))
      headTag.appendChild(el)
    } else {
      if (checkIsCurrentHasStyle(headTag)) {
        const elNeedRm = headTag.lastChild
        if (elNeedRm) {
          headTag.removeChild(elNeedRm)
        }
      }
    }
  }

  useWatchWithMounted(() => themeStore.darkMode, makeStyle)
}
