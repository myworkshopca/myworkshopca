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
        height="600"
      )
        v-calendar(
        )
</template>

<script>
export default {
}
</script>
