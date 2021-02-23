<template lang="pug">
  v-img(
    v-bind="$attrs"
    v-on="$listeners"
  )
    slot
</template>

<script>
export default {
    name: 'StoreBaseImage',
}
</script>
