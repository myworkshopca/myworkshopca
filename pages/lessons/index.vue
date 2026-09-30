<script>
  // Extensions
  import StoreBaseView from '@/components/views/BaseView'

  // Mixins
  import LoadSections from '@/libs/load-sections'

  export default {

    layout: 'store',
    name: 'Lessons',
    auth: false,

    head: {
        title: 'Lessons'
    },

    extends: StoreBaseView,

    mixins: [
      LoadSections([
        'lessons-list',
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
