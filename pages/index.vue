<script lang="ts" setup>
const isActive = ref(true)
const classObject = computed(() => ({
  test: isActive.value,
}))

function toggle() {
  isActive.value = !isActive.value
}

const headers = useRequestHeaders(['cookie'])
// idle pending success error
const { data, status, error } = await useAsyncData(() => $fetch('/api/data', {
  headers,
  method: 'POST',
  body: { id: 1 },
  timeout: 6000,
  // responseType: 'blob'
}))

const { body1 }: { body1: any } = await $fetch('/api/user', {
  method: 'post',
  body: { test: 123 },
})

function handleError() {
  showError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}
</script>

<template>
  <div>
    <button
      type="button"
      class="text-blue111 primary-btn"
      @click="handleError"
    >
      错误测试
    </button>
    <AButton type="primary">
      Ant Design Button
    </AButton>
    <section>
      <p
        :class="classObject"
        class="bg-red-400"
      >
        This page will be displayed at the / route.
      </p>
    </section>
    <button @click="toggle">
      切换样式
    </button>
    <div>
      <span>{{ status }}</span>----<span>{{ data?.createdAt.year }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  /**
   * vite 全部导入颜色引用
   */
  color: $primary;
}
</style>
