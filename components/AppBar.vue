<template lang="pug">
div
  v-app-bar(
    id="home-app-bar"
    app
    color="white"
    elevation="1"
    height="80"
  )
    //v-img(
      :src="require('@/assets/store-logo.svg')"
      class="mr-3 hidden-xs-only"
      contain
      max-width="52"
      width="100%"
    //)
    v-img(
      :src="require('@/assets/store-logo-light.png')"
      contain
      max-width="192"
      width="100%"
    )

    v-spacer

    // hide when in sm screen / device
    div
      v-tabs(
        optional
        class="hidden-sm-and-down"
      )
        v-tab(
          v-for="(item, i) in items"
          :key="i"
          :to=" item.router "
          :exact="item.name === 'Home'"
          :ripple="false"
          active-class="text--primary"
          class="font-weight-bold"
          min-width="96"
          text
        ) {{ item.name }}

    // hide when the screen is md and up
    v-app-bar-nav-icon(
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    )

  // the drawer for sm screen.
  store-drawer(
    v-model='drawer'
    :items="items"
  )
</template>

<script>
export default {

    name: 'StoreAppBar',

    components: {
        StoreDrawer: () => import('./Drawer')
    },

    data: () => ({
      drawer: null,

      items: [
        { name: 'Home', router: '/' },
        { name: 'Lessons', router: '/lessons' },
        // hide resources for now, we only need lessons.
        //{ name: 'Resources', router: '/resources' },
        { name: 'Schedule', router: '/schedule' },
      ],
    }),
}
</script>
