// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // 追加自定义的 ESLint 配置（放在 Nuxt 默认配置后）
  {
    rules: {
      'no-console': 'warn', // 警告使用 console.log
    },
  },
)
  .prepend(
    // 在 Nuxt 默认配置之前插入一些规则
  )
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/ban-types': 'off', // 关闭特定 TypeScript 规则
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  })
