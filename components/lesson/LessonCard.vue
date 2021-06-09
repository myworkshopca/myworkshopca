<template lang="pug">
// Component LessonCard
   The component is used to display the cover image and
   short description for a lesson

v-card(
)
  // cover image
  v-img(
      height="250"
      :src="src"
  )

  v-card-title {{ title }}

  v-card-text(
      v-html="html"
  )

  v-btn(
    v-if="readMore"
    class="font-weight-bold"
    text
    :to="router"
  ) Read More
</template>

<script>
export default {

    name: 'StoreLessonCard',

    props: {
      category: String,
      comments: [Number, String],
      date: String,
      divider: Boolean,
      html: String,
      icon: String,
      prominent: Boolean,
      readMore: Boolean,
      src: String,
      text: String,
      title: String,
      router: String,
      truncate: [Number, String],
    },

    computed: {
      truncatedText () {
        if (!this.text) return ''

        const truncate = Number(this.truncate)

        return this.text.length > truncate
          ? this.text.slice(0, truncate) + ' [...]'
          : this.text
      },
    },
}
</script>
