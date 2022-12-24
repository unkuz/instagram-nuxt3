import { useThemeStore } from '~~/store'
import { useWatchWithMounted } from './useWatchWithMounted'

export const useScrollBarTheme = () => {
  const themeStore = useThemeStore()

  const styleCss = computed(() => {
    return `
::-webkit-scrollbar-track {
  background: #121212;
}`
  })

  const checkIsCurrentHasStyle = (headTag: HTMLHeadElement) => {
    let result: boolean = false
    headTag.childNodes.forEach(({ localName, attributes }: any) => {
      if (localName === 'style' && attributes[0]?.name === '__cuzknothz') {
        return (result = true)
      }
      result = false
    })
    return result
  }

  const makeStyle = () => {
    const headTag = document.getElementsByTagName('head')[0]

    if (themeStore.darkMode) {
      const el = document.createElement('style')
      el.setAttribute('__cuzknothz', '__cuzknothz')
      el.appendChild(document.createTextNode(styleCss.value))
      headTag.appendChild(el)
    } else if (checkIsCurrentHasStyle(headTag)) {
      headTag.childNodes.forEach((i: any) => {
        const { localName, attributes } = i
        if (localName === 'style' && attributes[0]?.name === '__cuzknothz') {
          return headTag.removeChild(i)
        }
      })
    }
  }

  useWatchWithMounted(() => themeStore.darkMode, makeStyle)
}
