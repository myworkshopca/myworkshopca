<template lang="pug">
// Component LessonToc
   The table of content component for lesson details.

// style
   - top, left, right: is for the position
   - set height to auto to adjust the height automatically
   - pl-6 set left padding to 6em!

   component
   reference the Vuetify document site source code:
    - https://github.com/vuetifyjs/vuetify/tree/master/packages/docs/src
   the layouts/default/Toc.vue component will have details for
   the table of content component.
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
      v-list-item(
        v-if="selectedSection > -1"
        @click="selectedSection = -1; scrollTo(-1)"
      )
        v-list-item-content
          v-list-item-title Back to top
</template>
<script>
export default {

    name: 'StoreLessonToc',

    props: {
    },

    data: function() {

        return {
            // the model for list-item-group, it will store the index id
            // for the selected item
            selectedSection: -1 
        };
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
