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
    gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
  )
    v-container(class="fill-height px-4 py-6")
      v-responsive(
        class="d-flex align-center"
      )

        store-base-subheading(title="MyWorkshop.ca")

        store-base-heading(title="Learn coding by building games!")

        div(class="font-weight-bold mb-4")
          | Teaching kids coding by building classical games: Snake Game, Minesweeper,
          | Tetris, Sudoku, etc!
          br
          | Everything is on a ZERO CONFIGURATION Cloud environment!
          br
          | Contact 
          span.warning--text SEAN.CHEN(at)MYWORKSHOP.CA 
          | for details.

        div(
          :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
          class="d-flex flex-wrap"
        )
          store-base-btn(
          ) More are coming ...

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
