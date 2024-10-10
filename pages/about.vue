<script lang="ts" setup>
useHead({
  title: 'About',
  bodyAttrs: {
    class: 'about',
  },
})

definePageMeta({
  middleware: 'auth',
})

const route = useRoute()
console.log(route)
</script>

<template>
  <section>
    <p class="primary">
      This page will be displayed at the /about route.
    </p>
  </section>
</template>
