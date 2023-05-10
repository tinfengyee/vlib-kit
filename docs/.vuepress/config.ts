import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import { codeBlockPlugin } from '@vlib/vuepress-plugins'
import defineOptions from 'unplugin-vue-define-options'

import * as navbar from './configs/navbar'
import * as sidebar from './configs/sidebar'

export default defineUserConfig({
  base: '/vlib-kit/',

  pagePatterns: [
    '**/*.md',
    '!.vuepress',
    '!node_modules',
    '../packages/vlib-ui/**/*.md',
    '!../packages/**/node_modules'
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'vlib-kit',
      description: 'Vue3 组件库开发模板 & Vue3 组件库实践指南'
    }
  },

  bundler: viteBundler({
    viteOptions: {
      plugins: [defineOptions.vite]
    },
    vuePluginOptions: {}
  }),

  theme: defaultTheme({
    logo: '/images/hero.png',

    repo: 'https://github.com',

    locales: {
      '/': {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言'
      }
    }
  }),

  plugins: [
    // @vlib/vuepress-plugins
    codeBlockPlugin()
  ]
})
