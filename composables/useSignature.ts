import { signature } from '@@/utils'

export const useSignature = () => {
  onMounted(() => {
    signature()
  })
}
