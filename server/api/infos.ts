export default defineEventHandler(async(event) => {
  // Parse query params
  const query = getQuery(event)

  // Try to read request body
  const body = await readBody(event).catch(() => {})

  const data = {
    toJSON() {
      return {
        auth: '123456',
        path: event.path,
        method: event.method
      }
    },
  }

  return data
})
