<template lang="pug">
store-base-section(
  id="lessondetails"
)
  store-base-section-heading(
    :title="title"
  ) {{ details.subtitle }}

  // style
  //  - top, left, right: is for the position
  //  - set height to auto to adjust the height automatically
  //  - pl-6 set left padding to 6em!
  v-navigation-drawer(
    floating
    fixed
    clipped
    style="top: 90px; height: auto; max-height: calc(100% - 72px)"
  ).pl-6

    template(
      v-slot:prepend
    )
      h3 Contents

    v-list(
      dense
      rounded
    )
      v-list-item-group(
        v-model="selectedSection"
        color="primary"
      )
        v-list-item(
          v-for="n in 10"
          :key="n"
          link
          @click="scrollTo(n)"
        )
          v-list-item-content
            v-list-item-title {{ `Item number ${n}` }}
              // the $vuetify.goTo method will handle the scrolling perfectly
              // $route allowed to be used inside the ${}
              //a(
              //  :href="`${$route.path}?name=${$route.query.name}#item${n}`"
              //) {{ `Item number ${n}` }}

  div(
    style="padding: 0px 256px 0px 300px"
  )
    // using dummy data for testing.

    section(
      v-for="i in 10"
      :key="i"
      :id="`item${i}`"
    ).pb-6
      h3 {{`ITEM: ${i}`}}
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

            details: null,

            // the model for list-item-group, it will store the index id
            // for the selected item
            selectedSection: 0
        };
    },

    created: function() {

        // here are the structure for the lessions:
        // - we will have a folder for each lesson.
        // - the index.json will have the lesson details
        // - all media / images will store in the lesson folder.
        this.details = require(`@/pages/lessons/${this.$route.query.name}/index.json`);
    },

    computed: {

        title: function() {

            // show the name query parameter as a quick test.
            // /games/detail?name=curses-snake
            //return this.$route.query.name;

            return this.details.title;
        }
    },

    methods: {

        scrollTo: function(n) {

            // set the target.
            const target = `#item${n}`;
            this.$vuetify.goTo(target);
        }
    }
}
</script>
