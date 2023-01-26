import DisableDevtool from 'disable-devtool'

export const useDisableDevTool = () => {
  onMounted(() => {
    DisableDevtool()
  })
}
