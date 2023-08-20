import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    exclude: [...configDefaults.exclude, 'plop/hook/*']
  },
  resolve: {
    alias: [
      { find: '@', replacement: 'apps/docs/src' },
      { find: '@components', replacement: 'apps/docs/src/components' },
      { find: '@hooks', replacement: 'apps/docs/src/hooks' },
      { find: '@utils', replacement: 'apps/docs/src/utils' },
      { find: '@pages', replacement: 'apps/docs/src/pages' }
    ]
  }
})
