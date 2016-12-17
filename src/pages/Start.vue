<template>
  <div class="container">
    <div class="columns">
      <div class="column col-12">
        <h4 class="text-center">Bingo Card</h4>
      </div>
    </div>

    <div class="columns">
      <div class="column col-12">
        <button class="btn btn-default btn-lg centered" v-on:click="newCardId">Generate NEW Bingo Card ID</button>
      </div>
    </div>

    <div class="columns">
      <div class="column col-12">
        <input class="form-input input-lg centered" type="text" placeholder="Card ID" :value="card_id" @input="updateCardId">
      </div>
    </div>

    <div class="columns">
      <div class="column col-12">
        <router-link :to="{ name: 'card' }" class="btn btn-primary btn-lg centered" :class="{ disabled: !card_id }">Start!</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
h4 {
  margin: 0.25rem
}
</style>

<script>
  import store from 'src/vuex/store'
  import { mapGetters } from 'vuex'

  export default {
    name: 'start',
    beforeCreate: () => {
      if (store.state.route.query.action === 'reset') {
        store.commit('initializeState')
      }
    },
    computed: {
      ...mapGetters(['card_id'])
    },
    methods: {
      newCardId: () => {
        var i = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
        store.commit('updateCardId', i)
      },
      updateCardId: (e) => {
        store.commit('updateCardId', e.target.value)
      }
    }
  }
</script>