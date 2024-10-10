export default defineNitroPlugin((nitroApp) => {
  // console.log('Nitro plugin', nitroApp)
  nitroApp.hooks.hook('close', async() => {
    console.log("Closing nitro server...")
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log("Task is done!")
  })
})
