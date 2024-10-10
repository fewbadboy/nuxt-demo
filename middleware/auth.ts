// Route Middleware
export default defineNuxtRouteMiddleware((to, from) => {
  const authorization = useRequestHeader('authorization')
  console.log(authorization)

  // if (false) {
  //   return navigateTo('/sign-in')
  // }
})
