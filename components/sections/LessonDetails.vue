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

  lesson-toc(
    :sectionTitles="sectionTitles"
  )

  div(
    style="padding: 0px 256px 0px 300px"
  )
    // overview of this lesson.
    p(
      v-if="details.overview"
      v-html="details.overview"
    )
    // this is the dummy data for testing.
    p( v-else ) some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview some overview 

    // go through the lesson details section by section.
    section(
      v-for="(section, i) in details.sections"
      :key="i"
      :id="`item${i}`"
    ).pb-6
      h3 {{ section.title }}
      // v-html will override all content inside this element.
      div(
        v-if="section.content"
        v-html="section.content"
      )
      // position="left"
      v-img(
        v-if="section.image"
        :src="require(`@/pages/lessons/${$route.query.name}/${section.image}`)"
        width="500px"
        position="center"
      )
      prism(
        v-if="section.example"
        language="python"
      ) {{ code(`${section.example}`) }}
      // using the slide-groups to show each image in a card.
         v-slide-group
           v-slide-item
             v-card

      // some testing code to check the $route object
      // br
      //| {{ $route.path }}
      //br
      //| {{ $route.query}}
</template>

<script>
import 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-python';

import Prism from 'vue-prism-component';

export default {

    name: "SectionLessonDetails",

    components: {
        'LessonToc': () => import('@/components/lesson/LessonToc'),
        'Prism': Prism
    },


    data: function() {

        return {

            // dummy data for testing.
            //code: 'import curses',

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
        },

        sectionTitles: function() {

            return this.details.sections.map( (section) => {
                return section.title;
            } );
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
        },

        code: function(filename) {

            const content = require(`@/pages/lessons/${this.$route.query.name}/${filename}`);
            //console.dir(content.default);
            return content.default;
        }
    }
}
</script>
