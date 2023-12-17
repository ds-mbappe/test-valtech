// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      secret: process.env.UNSPLASH_ACCESS_KEY
    }
  },
  devtools: { enabled: true },
})
