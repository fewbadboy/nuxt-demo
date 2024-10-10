<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
  pageTransition: {
    name: 'rotate',
  },
  // Route Validation
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  },
})

const route = useRoute()

function navigate() {
  navigateTo({
    path: '/aaaaa',
  })
}
</script>

<template>
  <div class="h-[400px]">
    <div>I am the books/[id] view</div>
    <section>
      <p class="primary">
        router/[id]: {{ route.params.id }}
      </p>
    </section>
    <button @click="navigate">
      主页
    </button>
  </div>
</template>
