<template>
  <div class="card" :class="[{ selected: selection_map[r-1][c-1] }, cls.animation]">
    <div class="card-header">
      <h4 class="card-title">{{ card_map[r-1][c-1] }}</h4>
      <!-- h4 class="card-title title">{{ list[card_map[r-1][c-1]].title }}</h4 -->
    </div>
    <div class="card-image centered">
      <a @click="updateSelection(r-1, c-1)"><img class="img-responsive" :src="list[card_map[r-1][c-1]].path" /></a>
    </div>
  </div>
</template>

<style scoped>
.card.selected {background: #ffeaef; border:5px solid #ffc9c9}
.card {
  border:5px solid #fff;
  animation-duration: 0.5s;
  animation-delay: 0;
  width: 100%;
}
.card .card-image{padding-top:0}
.card .card-title{margin-bottom:0}
.card-title{font-size:150%}
</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import async from 'async'
  import list from 'src/assets/list'

  export default {
    name: 'num',
    props: ['r', 'c'],
    data: function () {
      return {
        cls: {
          animation: 'animated bounce'
        },
        list
      }
    },
    computed: {
      ...mapGetters(['card_map', 'selection_map'])
    },
    methods: {
      updateSelection: function (r, c) {
        this.$store.dispatch('toggleSelection', { r, c })
        // NOTE: 以下、アニメーションのため
        var self = this
        async.waterfall([
          function (callback) {
            setTimeout(function () {
              self.cls.animation = 'animated pulse'
            }, 0.2) // NOTE: こうすると何故かうまく動く
            callback(null)
          },
          function (callback) {
            self.cls.animation = ''
            callback(null)
          }
        ])
      }
    }
  }
</script>