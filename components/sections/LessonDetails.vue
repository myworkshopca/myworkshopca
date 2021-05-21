<template lang="pug">
store-base-section(
  id="gamedetail"
)
  store-base-section-heading(
    :title="title"
  ) {{ details.subtitle }}
</template>

<script>
export default {

    name: "SectionGameDetail",

    data: function() {

        return {

            details: null
        };
    },

    created: function() {

        this.details = require(`@/pages/games/${this.$route.query.name}/index.json`);
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
