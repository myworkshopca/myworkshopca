<template lang="pug">
  v-responsive(
    :class="classes"
    class="store-base-divider"
    max-width="28"
    v-bind="$attrs"
    v-on="$listeners"
  )
    v-divider
</template>

<script>
  // Mixins
  import Heading from '@/libs/heading'

  export default {
    name: 'StoreBaseDivider',

    mixins: [Heading],

    props: {
      color: String,
      dense: Boolean,
      space: {
        type: [Number, String],
        default: 6,
      },
    },

    computed: {
      classes () {
        return [
          this.color,
          this.margin,
          `mb-${this.space}`,
          this.dense && 'store-base-divider--dense',
        ]
      },
      margin () {
        switch (this.align) {
          case 'left': return 'mr-auto'
          case 'right': return 'ml-auto'
          default: return 'mx-auto'
        }
      },
    },
  }
</script>

<style lang="sass">
  .store-base-divider .v-divider
    border-width: 3px 0 0 0 !important

  .store-base-divider.store-base-divider--dense .v-divider
    border-width: 2px 0 0 0 !important
</style>
