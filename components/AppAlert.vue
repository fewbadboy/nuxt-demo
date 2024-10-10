<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <span>
      <slot />
    </span>
  </div>
</template>
