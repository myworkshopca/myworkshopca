<template lang="pug">
// the drawer for sm screen.
v-navigation-drawer(
  top 
  color="transparent"
  fixed
  height="auto"
  overlay-color="secondary"
  overlay-opacity=".8"
  temporary
  v-bind="$attrs"
  v-on="$listeners"
)
  v-list(
    color="white"
    shaped
  )
    v-list-item(
      v-for="(item, i) in items"
      :key="i"
      :to=" item.router "
      :exact="item.name === 'Home'"
      color="primary"
    )
      v-list-item-content
        v-list-item-title( v-text="item.name" )
</template>
<script>
export default{

    name: 'StoreDrawer',

    props: {
        items: {
            type: Array,
            default: () => ([
                { name: "Home", router: "/" }
            ]),
        }
    }
}
</script>
