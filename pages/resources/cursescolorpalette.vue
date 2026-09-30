<template lang="pug">
  store-base-section(
    id="article"
    space="12"
  )
    v-container( class="py-0" )
      v-row( justify="center" )
        v-col(
          cols="10"
        )
          news-article(
            class="mb-4"
            prominent
            v-bind="article"
          )
            p Demonstrate how Python curses handle colors.
            a(
              href="https://repl.it/@seanchen7/colorpalettepy?view=1"
              target="_blank_"
            ) Open on Replit Spotlight page
            p
            iframe(
              height="700px" width="100%"
              src="https://repl.it/@seanchen7/colorpalettepy?lite=true&outputonly=1"
              scrolling="no"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
              sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
            )
</template>

<script>
import StoreBaseView from '@/components/views/BaseView'

  export default {

    layout: 'store',
    name: 'cursesColorpalette',
    auth: false,

    metaInfo: { title: 'Curses colour palette' },

    extends: StoreBaseView,

    components: {
      NewsArticle: () => import('@/components/news/ReplArticle'),
    },

    data: () => ({
      article: {
        icon: 'mdi-image',
        date: 'Jan 12, 2020',
        category: 'Research Discussions',
        comments: 5,
        title: 'Python curses Color Palette',
        router: '/resources/cursescoordinate',
        //src: require('@/assets/myworkshopca/py-curses-coordinate.gif'),
      },
    }),
  }
</script>
