<template lang="pug">
  div
    router-link(
      :to="router"
      class="d-block"
    )
      store-base-img(
        :height="prominent ? 400 : 250"
        :src="src"
        flat
        tile
      )
        v-row(
          class="ma-0 fill-height"
          align="end"
          justify="end"
        ) 
          v-sheet(
            class="pa-2 d-inline-flex align-center justify-center"
            color="primary"
            dark
            tile
            height="40"
            width="40"
          )
            v-icon(
              v-if="icon"
              v-text="icon"
            )

    div( class="pa-4" )
      store-base-title(
        :title="title"
        class="text-truncate text-uppercase"
      )

      store-base-body(
        :text="!html ? truncatedText : undefined"
        :html="html"
        space="0"
        align="left"
      )

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
