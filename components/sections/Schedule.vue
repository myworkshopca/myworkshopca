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
          )
            v-icon mdi-chevron-left

          v-toolbar-title(
            v-if="$refs.calendar"
          ) {{ $refs.calendar.title }}

          v-btn(
            icon
            @click="$refs.calendar.next()"
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
        )
</template>

<script>
export default {

    name: "SectionSchedule",

    data: function() {
        return {
            value: '',
        };
    },

    mounted() {

        this.$refs.calendar.checkChange();
    },

    methods: {

        setToday() {
            this.value= '';
        }
    }
}
</script>
