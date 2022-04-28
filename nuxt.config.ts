import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/styles/normalize.css',
    '~/assets/styles/global.scss',
    '~/assets/styles/variables.scss',
  ],
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
  },
})
