// import { NuxtAuthHandler } from '#auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { axios } from '@/services/axios'
// import { APP_API } from '@/apis'
// // import { ToastTypeEnum, useToastStore } from '@/store'

// export default NuxtAuthHandler({
//   pages: {
//     signIn: '/auth/',
//   },
//   secret: process.env.AUTH_SECRET ?? import.meta.env.AUTH_SECRET ?? 'd',
//   providers: [

//     // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
//     CredentialsProvider.default({
//       async authorize(credentials: any) {
//         // const toastStore = useToastStore()

//         try {
//           // const { data } = await axios.post(APP_API.AUTH.LOGIN, {
//           //   user_name: credentials?.username,
//           //   password: credentials.password,
//           // })
//           // // toastStore.pushTimmer({
//           // //   type: ToastTypeEnum.SUCCESS,
//           // //   content: 'Login successfully',
//           // // })

//           return {
//             user: 'cuzknothz'
//           }
//         } catch (e) {
//           return null
//         }
//       },
//     }),
//   ],
// })
