export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to.fullPath)
  if (to.params.id === '1') {
    return abortNavigation()
  }
  return navigateTo('/')
})
