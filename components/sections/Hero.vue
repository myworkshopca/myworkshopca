<template lang="pug">
section(id="hero")
  //  src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  // vh is for the viewport height, similar to % units
  //  max-height="calc(100vh - 80px - 72px)"
  v-img(
    :max-height="minHeight"
    :min-height="minHeight"
    :src="require('@/assets/store-home-hero.jpg')"
    class="white--text"
  )
    v-container(class="fill-height px-4 py-6")
      v-responsive(
        class="d-flex align-center"
      )
        store-base-heading(title="BaBao Food")

        div(class="font-weight-bold mb-4")
          | Coming soon ...
</template>

<script>
export default {
    name: 'SectionHero',

    provide: {
        theme: { isDark: true },
    },

    computed: {
        minHeight () {

            const height = this.$vuetify.breakpoint.mdAndUp ? '93vh' : '93vh'

            //console.log("Height=", height);
            //console.log("Application: ", this.$vuetify.application);
            //console.log("Application top: ", this.$vuetify.application.top);

            let minH = `calc(${height} - ${this.$vuetify.application.top}px)`;
            //console.log('Min Height: ', minH);

            return minH;
        },
    },
}
</script>
