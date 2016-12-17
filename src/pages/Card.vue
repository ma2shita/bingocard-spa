<template>
  <div class="container">
    <div class="columns">
      <div class="column col-12">
        <h4 class="text-center">Bingo Card</h4>
      </div>
    </div>

    <!-- // TOOD: improved to elastic more than -->
    <div class="columns">
      <div class="column col-12">
        <table class="table">
          <tr v-for="r in 5">
            <td class="num" v-for="c in 5">
              <num :r="r" :c="c"></num>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="columns">
      <div class="column col-12">
        <router-link :to="{ name: 'start' }">Back</router-link>
        <pre>{{ card_id }}</pre>
      </div>
    </div>
</template>

<style scoped>
.num {
  border-bottom: none;
  padding: 0;
}
h4 {
  margin: 0.25rem
}
</style>

<script>
  import { mapGetters } from 'vuex'
  import Num from 'src/components/Num'

  export default {
    name: 'card',
    components: {
      Num
    },
    beforeCreate: function () {
      this.$store.dispatch('setCardMap')
    },
    computed: {
      ...mapGetters(['card_id'])
    }
  }
</script>