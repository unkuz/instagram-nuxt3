import { tagDev } from '@@/utils'

export const useSignature = () => {
  onMounted(() => {
    tagDev()
  })
}
