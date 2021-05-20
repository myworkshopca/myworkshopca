<script>
  // Extensions
  import StoreBaseView from '@/components/views/BaseView'

  // Mixins
  import LoadSections from '@/libs/load-sections'

  export default {

    layout: 'store',
    name: 'Resources',
    auth: false,

    head: {
        title: 'Resources'
    },

    extends: StoreBaseView,

    mixins: [
      LoadSections([
        'resources',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'setup',
      },
    },
  }
</script>
