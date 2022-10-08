<template lang="pug">
v-footer(
  id="home-footer"
  color="grey darken-4"
  dark
  min-height="72"
)
  v-container
    v-row
      v-col(
        class="text-center"
        cols="12"
      )
        | Copyright &copy; 2022 MyWorkshop.ca
        a(
          href="https://twitter.com/myworkshopca"
        ).pl-2
           v-icon mdi-twitter
        br
        span.text-caption.font-weight-thin Version: {{ version }}
</template>

<script>
// try to get the version from package.json.
import { describe } from '../libs/version.json';

export default {
    name: 'HomeFooter',

    data: () => ({
    }),

    computed: {

        version: function() {

            //console.log('Version: ', version);
            return describe;
        },
    }
}
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
