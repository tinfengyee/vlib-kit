const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        // 'no-undef': 'off',
        // 'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ],
  extends: ['plugin:vue/vue3-recommended', './typescript'],
  globals: { defineOptions: 'writable' },
  rules: {
    // off rules
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off'
  }
})
