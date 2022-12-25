<script>
  // Extensions
  import StoreBaseView from '@/components/views/BaseView'

  // Mixins
  import LoadSections from '@/libs/load-sections'

  export default {

    layout: 'store',
    name: 'LessonDetailMD',
    auth: false,

    head: {
        title: 'Lesson Detail Markdown'
    },

    extends: StoreBaseView,

    mixins: [
      LoadSections([
        'lesson-details-markdown',
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
<style>
h1 {
  /*background: red;*/
  font-size: 2em;
  text-align: center;
}
code {
  display: block;
}
table {
  width: 100%;
  border: 1px solid red;
}
</style>
