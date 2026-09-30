<script>
// extends from BaseView.
import StoreBaseView from '@/components/views/BaseView'

// mixins.
import LoadSections from '@/libs/load-sections'

export default {

    layout: 'store',
    name: 'StoreHome',
    auth: false,

    metaInfo: {
        title: 'Home'
    },

    // extends from the store base view component.
    extends: StoreBaseView,

    // LoadSections will mixin the sections for this page.
    mixins: [
        LoadSections([
            'hero'
        ]),
    ],

    props: {
        id: {
            type: String,
            default: 'home',
        }
    }
}
</script>
