<template lang="pug">
store-base-section(
  id="gamedetail"
)
  store-base-section-heading(
    :title="title"
  ) Game Details
</template>

<script>
export default {

    name: "SectionGameDetail",

    computed: {

        title: function() {

            // show the name query parameter as a quick test.
            // /games/detail?name=curses-snake
            return this.$route.query.name;
        }
    }
}
</script>
