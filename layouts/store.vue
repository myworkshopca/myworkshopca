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

    components: {
        HomeAppBar: () => import('@/components/AppBar'),
        HomeFooter: () => import('@/components/Footer')
    }
}
</script>
