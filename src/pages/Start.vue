<template>
  <div class="container">
    <div class="columns">
      <div class="column col-12">
        <h4 class="text-center">Bingo Card</h4>
      </div>
    </div>

    <div class="columns">
      <div class="column col-12">
        <button class="btn btn-default btn-lg centered" @click="newCardId">1. Generate NEW Bingo Card ID</button>
      </div>
    </div>

    <div class="columns">
      <div class="column col-12">
        <input class="form-input input-lg centered" type="text" placeholder="Card ID" :value="card_id" @input="updateCardId">
      </div>
    </div>

    <div class="columns">
      <div class="column col-12">
        <router-link :to="{ name: 'card' }" class="btn btn-primary btn-lg centered" :class="{ disabled:  !card_id }">2. Start!</router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column col-12">
        <h5>ご利用にあたって</h5>
        <ol>
          <li><b>Generate NEW Bingo Card ID</b>を押す → Card IDが生成されます</li>
          <li><b>Start!</b>でビンゴカードが配信されます</li>
        </ol>
        <ul>
          <li>HTML5, CSS3, LocalStorage等を使い、クライアントサイドSingle Page Applicationとして動作します
            <ul>
              <li>最近のモダンなブラウザなら動くでしょう</li>
              <li>プライベートモード(In-Private mode)では動きませんのでご注意</li>
              <li>LocalStorageが不要になったら削除してください(手順はブラウザの操作方法に従ってください)</li>
              <li>サーバはHTMLやJS配信にのみに使っています。プレイ中は特にサーバとの通信を行いません。通信料は利用者負担です</li>
            </ul>
          </li>
        </ul>
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
        var new_card_id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
        store.commit('updateCardId', new_card_id)
      },
      updateCardId: (e) => {
        store.commit('updateCardId', e.target.value)
      }
    }
  }
</script>