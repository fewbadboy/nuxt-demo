export default defineEventHandler((event) => {
  const id = parseInt(event.context.params!.id) as number
  const query = getQuery(event)
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }

  return {
    userId: query.id,
  }
})
