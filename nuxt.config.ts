// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales: [
      { code: 'ko', iso: 'ko-KR', name: 'Korean', file: 'ko.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ja', iso: 'ja-JP', name: 'Japanese', file: 'ja.json' }
    ],
    defaultLocale: 'ko', // 접속자 브라우저 언어 감지하게 설정하면 더 좋음
    strategy: 'prefix_and_default', // /ja, /en 이렇게 주소 분리
    langDir: 'locale',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  app: {
    head: {
      title: 'Dev-Park | Full Stack Developer',
      meta: [
        { name: 'description', content: 'Modern Web & App Developer based in Korea/Japan.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' } // 모바일 필수
      ]
    }
  }
})
