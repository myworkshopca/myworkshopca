<template lang="pug">
  store-base-section(
    id="calendar"
  )
    store-base-section-heading(
      title="Appointment"
    ) 
      | Make an appointment for lessons and debug sessions.

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
            @click="$refs.thecalendar.prev()"
          )
            v-icon mdi-chevron-left
          v-btn(
            icon
            @click="$refs.thecalendar.next()"
          )
            v-icon mdi-chevron-right

          v-toolbar-title(
            v-if="$refs.thecalendar"
          ) {{ $refs.thecalendar.title }}
      v-sheet(
        height="600"
      )
        v-calendar(
          id="thecalendar"
          ref="thecalendar"
          v-model="value"
          type="week"
          color="primary"
        )
</template>

<script>
export default {

    name: "SectionCalendar",

    data: function() {
        return {
            value: '',
        };
    },

    mounted() {

        this.$refs.thecalendar.checkChange();
    },

    methods: {

        setToday() {
            this.value= '';
        }
    }
}
</script>
