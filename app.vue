<script setup lang="ts">
import AppAlert from './components/AppAlert.vue'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Web` : 'Web'
  },
  meta: [
    { name: 'author', content: 'fewbadboy' },
  ],
})

// SEO
useSeoMeta({
  title: '',
  ogTitle: '',
  // description: '',
  ogDescription: '',
})
const config = useRuntimeConfig()
</script>

<template>
  <div>
    <span>{{ config.basePath }}</span>
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">
              主页
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/books/18">
              /books/18
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <AppAlert :title="'Hello, AppAlert'">
      <!-- <NuxtImg src="https://www.google.com/logos/2024/popcorn/rc3/cta.png" placeholder /> -->
      <!-- <img src="/image.jpg" /> -->
      <img
        src="assets/who.png"
        alt="img"
      >
    </AppAlert>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
