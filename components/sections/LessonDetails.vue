<template lang="pug">
store-base-section(
  id="lessondetails"
)
  store-base-section-heading(
    :title="title"
  ) {{ details.subtitle }}

  v-navigation-drawer(
    floating
    fixed
    clipped
    style="top: 80px"
  )
    v-list(
      dense
      rounded
    )
      v-list-item(
        v-for="n in 10"
        :key="n"
        link
      )
        v-list-item-content
          v-list-item-title
            a(
              :to="`#item${n}`"
              @click.native="`location.hash='#item${n}'`"
            ) {{ `Item number ${n}` }}

  div(
    style="padding: 0px 256px 0px 300px"
  )
    // using dummy data for testing.

    section(
      v-for="i in 10"
      :key="i"
      :id="`item${i}`"
    ).pb-12 {{`ITEM: ${i}`}}
      br
      | {{ $route.path }}
      br
      | {{ $route.query}}
      br
      | aes eiale eislerh deislda eisrh eslei sielseka deisl deodkdy esqiakdit soel. aes eiale eislerh deislda eisrh eslei sielseka deisl deodkdy esqiakdit soel. aes eiale eislerh deislda eisrh eslei sielseka deisl deodkdy esqiakdit soel. aes eiale eislerh deislda eisrh eslei sielseka deisl deodkdy esqiakdit soel.
</template>

<script>
export default {

    name: "SectionLessonDetails",

    data: function() {

        return {

            details: null
        };
    },

    created: function() {

        this.details = require(`@/pages/lessons/${this.$route.query.name}/index.json`);
    },

    computed: {

        title: function() {

            // show the name query parameter as a quick test.
            // /games/detail?name=curses-snake
            //return this.$route.query.name;

            return this.details.title;
        }
    }
}
</script>
