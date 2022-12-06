import { useThemeStore } from '~~/store'
import { useWatchWithMounted } from './useWatchWithMounted'

export const useScrollBarTheme = () => {
  const themeStore = useThemeStore()

  const styleCss = computed(() => {
    const { darkMode } = themeStore
    return `
/* Custom ScrollBar Chrome Opera */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-track {
  background: ${darkMode ? '#121212' : 'white'};
}
::-webkit-scrollbar-thumb {
  background: #00b3ff;
}
::-webkit-scrollbar-thumb:hover {
    background: #ff0088;
}
/* Custom ScrollBar FireFox */
        `
  })

  const makeStyle = () => {
    let styleElement = document.createElement('style')
    styleElement.appendChild(document.createTextNode(styleCss.value))
    document.getElementsByTagName('head')[0].appendChild(styleElement)
  }

  useWatchWithMounted(() => themeStore.darkMode, makeStyle)
}
