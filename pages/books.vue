<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
  key: route => route.fullPath,
})
</script>

<template>
  <div>
    <section>
      <p class="primary">
        I am the books view
      </p>
    </section>
    <NuxtPage />
  </div>
</template>
