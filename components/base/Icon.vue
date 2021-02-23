<template lang="pug">
  v-icon(
    :size="size"
    v-bind="$attrs"
    v-on="$listeners"
  )
    slot
</template>

<script>
  export default {
    name: 'StoreBaseIcon',

    props: {
      size: {
        type: [Number, String],
        default: 56,
      },
    },
  }
</script>
