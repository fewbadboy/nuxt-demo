export default defineNuxtPlugin(() => {
  const timer = useState('timer', () => 0)

  addRouteMiddleware(async () => {
    // todo
  })

  addRouteMiddleware((to) => {
    if (to.path === '/forbidden') {
      return false
    }
  })
})
