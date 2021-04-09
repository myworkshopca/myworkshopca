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
          first-time="10:00"
          :events="events"
          :event-color="getEventColor"
          @change="getEvents"
        )
</template>

<script>
export default {

    name: "SectionSchedule",

    data: function() {
        return {
            //value: '1999-03-01',
            value: '',
            // set the weekday to start from Friday
            weekday: [5,6,0,1,2,3,4],
            events: [],
        };
    },

    mounted() {

        // set to today to force the title.
        // check this issue: https://github.com/vuetifyjs/vuetify/issues/8940
        //this.value = '';
        this.$refs.calendar.checkChange();
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

            const events = [];

            //console.log("start: ", start.date);
            //console.log("start: ", end.date);
            // we set to start from Friday
            let theDay = new Date(`${start.date}T00:00:00`);
            //console.log("The Day: ", theDay);
            // we have lesson on Friday.
            let ymd = theDay.toISOString().split("T")[0];
            for( let i = 0; i < 7; i ++) {

                // event name.
                let name = "Help & Debug Session";
                let color = "primary";
                if([5, 6].includes(theDay.getDay())) {
                    name = "Lesson: Snake Game";
                    color = "warning";
                }

                // event start time.
                let st = "16:00:00";
                let et = "17:00:00";
                switch( theDay.getDay() ) {
                    case 0:
                        st = "10:00:00";
                        et = "11:00:00";
                        break;
                    case 1:
                        st = "18:00:00";
                        et = "19:00:00";
                        break;
                    case 4:
                        st = "19:00:00";
                        et = "20:00:00";
                        break;
                    case 5:
                        st = "19:00:00";
                        et = "20:30:00";
                        break;
                    case 6:
                        st = "18:30:00";
                        et = "20:00:00";
                        break;
                    default:
                        break;
                }

                events.push( {
                    name: name,
                    start: new Date(`${ymd}T${st}`),
                    end: new Date(`${ymd}T${et}`),
                    color: color,
                    timed: true
                } );

                theDay.setDate( theDay.getDate() + 1 );
                //console.log("The Day: ", theDay);
                ymd = theDay.toISOString().split("T")[0];
            }

            this.events = events;

        },

        /**
         */
        getEventColor( event ) {

            return event.color;
        }
    }
}
</script>
