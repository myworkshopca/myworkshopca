<script>
  // Extensions
  import StoreBaseView from '@/components/views/BaseView'

  // Mixins
  import LoadSections from '@/libs/load-sections'

  export default {

    layout: 'store',
    name: 'Appointment',
    auth: false,

    metaInfo: { title: 'Make an appointment' },

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
