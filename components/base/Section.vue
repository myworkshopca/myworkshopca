<template lang="pug">
  section(
    v-bind="$attrs"
    :style="styles"
    v-on="$listeners"
  )
    slot
</template>

<script>
  // Components
  import Measurable from 'vuetify/lib/mixins/measurable'

  export default {
    name: 'StoreBaseSection',

    mixins: [Measurable],

    props: {
      space: {
        type: [Number, String],
        default: 26,
      },
    },

    computed: {
      styles () {
        const space = this.$vuetify.breakpoint.mdAndUp
          ? this.space
          : this.space / 2

        return {
          ...this.measurableStyles,
          padding: `${space}px 0`,
        }
      },
    },
  }
</script>
