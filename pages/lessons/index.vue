<script>
  // Extensions
  import StoreBaseView from '@/components/views/BaseView'

  // Mixins
  import LoadSections from '@/libs/load-sections'

  export default {

    layout: 'store',
    name: 'Games',
    auth: false,

    head: {
        title: 'Games'
    },

    extends: StoreBaseView,

    mixins: [
      LoadSections([
        'games',
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
