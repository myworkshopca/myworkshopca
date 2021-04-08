<template lang="pug">
  store-base-section(
    id="calendar"
  )
    store-base-section-heading(
      title="Appointment"
    ) 
      | A list of resources and tools for students to 
      | experience and understand key concepts and aspects of
      | computer programming.

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
