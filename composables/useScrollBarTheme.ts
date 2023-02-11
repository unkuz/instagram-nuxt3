import { useThemeStore } from '@/store'
import { useStyleTag } from '@vueuse/core'
import { storeToRefs } from 'pinia'

export const useScrollBarTheme = () => {
  const { darkMode } = $(storeToRefs(useThemeStore()))

  const { load, unload } = useStyleTag(`
      ::-webkit-scrollbar-track {
        background: #121212;
      }
      :root {
        --scrollbar-track: #121212 !important;
      }
      `,{id:'scrollbar_theme'})

  watchEffect(() => {
    if (darkMode) {
      load()
    } else {
      unload()
    }
  })
}
