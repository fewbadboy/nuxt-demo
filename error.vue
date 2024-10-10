<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h1>自定义错误，你的明白</h1>
    <h2>{{ props.error?.statusCode }}</h2>
    <button @click="handleError">
      Clear errors
    </button>
  </div>
</template>
