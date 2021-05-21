<script>
  // Extensions
  import StoreBaseView from '@/components/views/BaseView'

  // Mixins
  import LoadSections from '@/libs/load-sections'

  export default {

    layout: 'store',
    name: 'LessonDetail',
    auth: false,

    head: {
        title: 'Lesson Detail'
    },

    extends: StoreBaseView,

    mixins: [
      LoadSections([
        'lesson-details',
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
