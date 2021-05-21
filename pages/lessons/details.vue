<script>
  // Extensions
  import StoreBaseView from '@/components/views/BaseView'

  // Mixins
  import LoadSections from '@/libs/load-sections'

  export default {

    layout: 'store',
    name: 'GameDetail',
    auth: false,

    head: {
        title: 'Game Detail'
    },

    extends: StoreBaseView,

    mixins: [
      LoadSections([
        'game-detail',
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
