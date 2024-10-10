export default defineEventHandler((event) => {
  // console.log(`request: ${getRequestURL(event)}`)
  // Extends or modify the event
  event.context.user = { user: 'Nitro' }
})
