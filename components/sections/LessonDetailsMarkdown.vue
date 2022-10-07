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
  ) section content
</template>

<script>
export default {

    name: "SectionLessonDetailsMarkdown"
}
</script>
