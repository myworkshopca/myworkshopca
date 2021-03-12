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
        // the Sing in
        //v-tab(
          v-if="!$auth.loggedIn" 
          :ripple="false"
          active-class="text--primary"
          class="font-weight-bold"
          min-width="96"
          text
          @click="login"
        //) Sign In
        //v-menu(
          v-if="$auth.loggedIn"
          left bottom offset-y transition="scale-transition"
        //)
          template( v-slot:activator="{ on }" )
            v-tab(
              v-if="$auth.loggedIn" 
              v-on="on"
              class="font-weight-bold"
            )
              v-avatar(
                  size="32"
              )
                img(:src="$auth.user.picture")
              v-icon mdi-menu-down
          v-card
            v-list
              v-list-item
                v-list-item-avatar
                  img( :src="$auth.user.picture" )
                v-list-item-content
                  v-list-item-title {{$auth.user.name}}
                  v-list-item-subtitle {{$auth.user.email}}
              v-list-item( @click="logout" )
                v-list-item-icon
                  v-icon mdi-logout
                v-list-item-content
                  v-list-item-title Logout

            v-divider

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
        { name: 'Resources', router: '/resources' },
        //{ name: 'Lessons', router: '/menu' },
        //{ name: 'How to', router: '/setup' },
        //{ name: 'Pricing', router: '/pricing' },
        //'About',
        //'Contact',
        //'Pro',
      ],
    }),

    methods: {

        login: function() {

            return this.$auth.loginWith('auth0')
                .catch(error => {
                    console.log(error);
                });
        },

        logout: function() {

            return this.$auth.logout();
        }
    }
}
</script>
