<script>
  // Extensions
  import StoreBaseView from '@/components/views/BaseView'

  // Mixins
  import LoadSections from '@/libs/load-sections'

  export default {

    layout: 'store',
    name: 'Resources',
    auth: false,

    metaInfo: { title: 'Material and Resources for MyWorkshop' },

    extends: StoreBaseView,

    mixins: [
      LoadSections([
        'calendar',
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
