<template lang="pug">
v-app
  home-app-bar

  v-main
    v-fade-transition( mode="out-in" )
      Nuxt/

  home-footer
</template>

<script>
export default {

    name: "StoreLayout",

    /**
     * Nuxt.js application Meta tags and SEO:
     * https://nuxtjs.org/docs/2.x/features/meta-tags-seo/
     */
    head: {
        title: 'Home',
        titleTemplate: '%s | MyWorkshop',
        htmlAttrs: { lang: 'en' },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
    },

    components: {
        HomeAppBar: () => import('@/components/AppBar'),
        HomeFooter: () => import('@/components/Footer')
    }
}
</script>
