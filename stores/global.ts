export const useGlobalStore = defineStore('global', {
  state: () => ({
    auth: '',
  }),
  actions: {
    async fetch() {
      const infos = await $fetch('/api/infos')

      this.auth = infos.auth
    },
  },
})
