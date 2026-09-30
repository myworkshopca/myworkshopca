<template lang="pug">
  div
    div( class="pa-4" )
      store-base-title(
        :title="title"
        class="text-truncate text-uppercase"
      )

      store-base-body(
        space="0"
        align="left"
      )
        slot

    v-btn(
      v-if="readMore"
      class="font-weight-bold"
      text
    ) Read More

    v-divider(
      v-if="divider"
      class="mt-6"
    )
</template>

<script>
  export default {
    name: 'StoreNewsCard',

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
