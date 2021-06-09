<template lang="pug">
  div(
    :class="classes"
    class="base-section-heading"
  )
    store-base-avatar(
      v-if="icon"
      :icon="icon"
      :outlined="outlined"
      class="mb-4"
      color="primary"
      dark
    )

    store-base-subtitle(
      v-if="subtitle"
      :title="subtitle"
      space="1"
      tag="h2"
    )

    // turn off the uppercase by remove this class
       - class="text-uppercase"
    store-base-subheading(
      v-if="title"
      :align="align"
      :title="title"
      space="2"
    )

    store-base-divider( :color="color" )

    store-base-body(
      v-if="$slots.default || text"
      class="mx-auto"
      max-width="700"
    )
      slot( v-if="$slots.default" )

      template( v-else ) {{ text }}
</template>

<script>
  // Mixins
  import Heading from '@/libs/heading'

  export default {
    name: 'StoreBaseSectionHeading',

    mixins: [Heading],

    props: {
      align: {
        type: String,
        default: 'center',
      },
      color: {
        type: String,
        default: 'primary',
      },
      icon: String,
      outlined: Boolean,
      space: {
        type: [Number, String],
        default: 12,
      },
      subtitle: String,
      text: String,
      title: String,
    },

    computed: {
      classes () {
        return [
          `text-${this.align}`,
          `mb-${this.space}`,
        ]
      },
    },
  }
</script>
