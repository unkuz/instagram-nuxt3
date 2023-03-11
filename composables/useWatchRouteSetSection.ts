import { useGlobalStore } from '@/store'
import { SectionEnum } from '@/constants'

export const useWatchRouteSetSection = () => {
  const globalStore = useGlobalStore()
  const route = useRoute()

  watchEffect(() => {
    if (globalStore.section === SectionEnum.NEW_POST) {
      return
    }

    const mapData = {
      _: SectionEnum.HOME,
      inbox: SectionEnum.MESSENGER,
      reels: SectionEnum.REELS,
      explore: SectionEnum.FINDPEOPLE,
      'activity-feed': SectionEnum.ACTIVITYFEED,
    }

    const section = route.path.split('/')[1] as keyof typeof mapData

    globalStore.setSection(mapData?.[section] ?? SectionEnum.SELF)
  })
}
