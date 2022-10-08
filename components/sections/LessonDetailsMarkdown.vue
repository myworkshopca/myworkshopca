<template lang="pug">
store-base-section(
  id="lessondetailsmd"
)
  // title was set to be all upper case by using the class
     - text-uppercase
     which is set on component base/SectionHeading.vue
  store-base-section-heading(
    title="title"
    id="top"
    space="5"
  ) section heading

  div(
    style="padding: 0px 256px 0px 300px"
    v-html="mdhtml('index.md')"
  )
</template>

<script>
export default {

    name: "SectionLessonDetailsMarkdown",

    methods: {

        /**
         * utility function to load content of the given file
         * This will depends on the raw-loader configuration in nuxt.config.js
         */
        mdhtml: function(filename) {

            const content = require(`@/pages/lessons/${this.$route.query.name}/${filename}`);

            // return the the raw content of the file.
            //console.dir(content.default);
            //return content.default;

            const mdit = require('markdown-it')();
            return mdit.render(content.default);
        }
    }
}
</script>
