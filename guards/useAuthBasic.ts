// import { useAuthStore } from '@/store'
// import jwt_decode from 'jwt-decode'

// export const useAuthBasic = () => {
//   const authStore = useAuthStore()

//   const accessToken = computed(() => authStore.data.token.access)

//   if (_isNil(accessToken)) {
//     navigateTo('/auth/')
//   }
//   try {
//     const { exp } = jwt_decode(accessToken)

//     if (exp > Date.now()) {
//       authStore.getNewAccessToken(accessToken)
//     }
//   } catch (e) {
//     console.log('E', e)
//   }

//   console.log(jwt_decode(accessToken))

//   watchEffect(() => {
//     if (!accessToken) {
//       navigateTo('/auth/')
//     }
//   })
// }
// //
