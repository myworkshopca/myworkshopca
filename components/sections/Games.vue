<template lang="pug">
store-base-section(
  id="games"
)
  store-base-section-heading(
    title="Games"
  ) 
    | A list of games that we are building now.

  v-container
    v-row
      v-col(
        v-for="(game, i) in games"
        :key="i"
        cols="12"
        md="4"
      )
        game-card(
          v-bind="game"
          :src="require(`@/pages/games/${game.img}`)"
          readMore
        )
</template>

<script>
export default {

    name: 'SectionGames',

    components: {
        GameCard: () => import('@/components/game/GameCard'),
    },

    data: function() {
        return {
            games: []
        };
    },

    mounted: function() {

        this.games = require(`@/pages/games/games.json`);
    }
}
</script>
