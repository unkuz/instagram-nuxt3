import { useGlobalStore } from '@/store'
import { SectionEnum } from '@/constants'

export const useWatchRouteSetSection = () => {
  const globalStore = useGlobalStore()
  const route = useRoute()

  watchEffect(() => {
    const section = route.path.split('/')[1]

    if (section === '_') {
      globalStore.setSection(SectionEnum.HOME)
    } else if (section === 'inbox') {
      globalStore.setSection(SectionEnum.MESSENGER)
    } else if (section === 'reels') {
      globalStore.setSection(SectionEnum.REELS)
    } else if (section === 'explore') {
      globalStore.setSection(SectionEnum.FINDPEOPLE)
    } else if (section === 'cuzknothz') {
      globalStore.setSection(SectionEnum.SELF)
    }
  })
}
