<template lang="pug">
  store-base-section(
    id="resources"
  )
    store-base-section-heading(
      title="Resources and Tools"
    ) 
      | A list of resources and tools for students to 
      | experience and understand key concepts and aspects of
      | computer programming.

    v-container
      v-row
        v-col(
          v-for="(news, i) in articles"
          :key="i"
          cols="12"
          md="4"
        )
          news-card(
            v-bind="news"
            :src="require(`@/assets/${news.img}`)"
          )
</template>

<script>
  export default {
    name: 'SectionResources',

    components: {
        NewsCard: () => import('@/components/news/Card'),
    },

    provide: {
        heading: { align: 'center' },
        // privide the theme for injection.
        theme: { isDark: false},
    },

    data: () => ({
      articles: [
        {
          img: 'vlc-open.png',
          icon: 'mdi-image',
          date: 'Jan 12, 2020',
          category: 'Design',
          comments: 5,
          title: 'VLC media player on Computer',
          router: '/resources/coordinate',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, nulla voluptas sed[...]',
          // HTML tag will be allowed in html value.
          html: 'It is super easy to watch live sports on your computer using VLC media player [...]',
        },
        {
          img: 'iplaytv-appletv.png',
          icon: 'mdi-image',
          date: 'Jan 12, 2020',
          category: 'Design',
          comments: 5,
          title: 'iPlayTV on Apple TV',
          router: '/setup/iplaytv',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, nulla voluptas sed[...]',
          // HTML tag will be allowed in html value.
          html: 'It is very easy to use iPlayTV app on Apple TV [...]',
        },
      ],
    }),

    computed: {
    },
  }
</script>
