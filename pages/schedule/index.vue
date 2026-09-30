<script>
// Extensions
import StoreBaseView from '@/components/views/BaseView'

// Mixins
import LoadSections from '@/libs/load-sections'

export default {

    layout: 'store',
    name: 'Schedule',
    auth: false,

    head: {
        title: 'Schedule'
    },

    extends: StoreBaseView,

    mixins: [
      LoadSections([
        'schedule',
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
