<template lang="pug">
store-base-section(
  id="lessons-list"
)
  store-base-section-heading(
    title="Lessons"
  ) 
    | A list of lessons that we are offeringg now.

  v-container
    v-row
      v-col(
        v-for="(lesson, i) in lessons"
        :key="i"
        cols="12"
        md="4"
      )
        lesson-card(
          v-bind="lesson"
          :src="require(`@/pages/lessons/${lesson.img}`)"
          readMore
        )
</template>

<script>
export default {

    name: 'SectionLessonsList',

    components: {
        LessonCard: () => import('@/components/lesson/LessonCard'),
    },

    data: function() {
        return {
            lessons: []
        };
    },

    mounted: function() {

        this.lessons = require(`@/pages/lessons/lessons.json`);
    }
}
</script>
