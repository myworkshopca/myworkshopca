<script>
  import Heading from './Heading'
  import Header from '@/libs/heading'

  export default {
    name: 'StoreBaseTitle',

    // extends from Heading and adding some styles.
    extends: Heading,

    mixins: [Header],

    props: {
      size: {
        type: String,
        default: 'text-h6',
      },
      mobileSize: {
        type: String,
        default: 'text-subtitle-1',
      },
      tag: {
        type: String,
        default: 'h3',
      },
      weight: {
        type: String,
        default: 'bold',
      },
    },
  }
</script>
