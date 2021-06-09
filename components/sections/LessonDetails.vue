<template lang="pug">
store-base-section(
  id="lessondetails"
)
  // title was set to be all upper case by using the class
     - text-uppercase
     which is set on component base/SectionHeading.vue
  store-base-section-heading(
    :title="title"
    id="top"
  ) {{ details.subtitle }}

  lesson-toc

  div(
    style="padding: 0px 256px 0px 300px"
  )
    // overview of this lesson.
    p(
      v-if="details.overview"
      v-html="details.overview"
    )
    // this is the dummy data for testing.
    p( v-else) some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview 

    // go through the lesson details section by section.
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

    components: {
        LessonToc: () => import('@/components/lesson/LessonToc'),
    },


    data: function() {

        return {

            details: null,

            // the model for list-item-group, it will store the index id
            // for the selected item
            selectedSection: -1 
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

        /**
         * more details on page:
         * - https://vuetifyjs.com/en/features/scrolling/
         */
        scrollTo: function(n) {

            // set the target.
            //const target = n < 0 ? "#top" : `#item${n}`;
            //this.$vuetify.goTo(target);

            let vm = this;

            if( n < 0 ) {
                vm.$vuetify.goTo("#top");
                vm.$nextTick( () => {
                    vm.selectedSection = -1;
                } )
            } else {
                vm.$vuetify.goTo(`#item${n}`);
            }
        }
    }
}
</script>
