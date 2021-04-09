<template lang="pug">
  store-base-section(
    id="schedule"
  )
    store-base-section-heading(
      title="MyWorkshop Schedule"
    ) 
      | Current schedule for lessons and debug sessions.

    v-container
      v-sheet(
        tile
        height="50"
        class="d-flex"
      )
        v-toolbar(
          flat
        )
          // go to today.
          v-btn(
            outlined
            color="grey darken-2"
            @click="setToday"
          ) Today
          v-btn(
            icon
            @click="$refs.calendar.prev()"
            color="primary"
          )
            v-icon mdi-chevron-left

          v-toolbar-title(
            v-if="$refs.calendar"
          ) {{ $refs.calendar.title }}

          v-btn(
            icon
            @click="$refs.calendar.next()"
            color="primary"
          )
            v-icon mdi-chevron-right

      v-sheet(
        height="600"
      )
        v-calendar(
          ref="calendar"
          v-model="value"
          type="week"
          color="primary"
          :weekdays="weekday"
        )
</template>

<script>
export default {

    name: "SectionSchedule",

    data: function() {
        return {
            value: '1999-03-01',
            // set the weekday to start from Friday
            weekday: [5,6,0,1,2,3,4],
            events: [],
        };
    },

    mounted() {

        // set to today to force the title.
        // check this issue: https://github.com/vuetifyjs/vuetify/issues/8940
        this.value = '';
        //this.$refs.calendar.checkChange();
    },

    methods: {

        /**
         * method for the button to go to today.
         */
        setToday() {
            this.value= '';
        },

        /**
         * this method will hook on the @change event.
         */
        getEvents( {start, end} ) {

            
        },
    }
}
</script>
