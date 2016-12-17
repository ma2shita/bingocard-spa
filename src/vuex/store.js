import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import _ from 'underscore'
import 'seedrandom'
import createPersistedState from 'vuex-persistedstate'

// TOOD: Elastic more than  
const init_state = {
  card_id: null,
  card_map: [
    [],
    [],
    [],
    [],
    []
  ],
  selection_map: [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]
}

const state = {
  card: {
    id: init_state.card_id,
    map: _.clone(init_state.card_map)
  },
  selection: {
    map: _.clone(init_state.selection_map)
  }
}

const mutations = {
  initializeState: (state) => {
    state.card.id = init_state.card_id
    Vue.set(state.card, 'map', init_state.card_map)
    Vue.set(state.selection, 'map', init_state.selection_map)
  },
  updateCardId: (state, new_card_id) => {
    state.card.id = new_card_id
  },
  updateCardMap: (state, new_card_map) => {
    state.card.map = new_card_map
  },
  updateSelectionMap: (state, payload) => {
    var r = payload['r']
    var c = payload['c']
    var v = payload['v']
    Vue.set(state.selection.map[r], c, v) // NOTE: 直接書き換えると動かない <https://jp.vuejs.org/v2/guide/list.html#配列の置き換え>
  }
}

const actions = {
  setCardMap: ({ state, commit }) => {
    Math.seedrandom(state.card.id) // NOTE: Get same map by same seed of ramdom
    var map = [ // TOOD: Elastic more than
      _.sample(_.range(1, 15), 5),
      _.sample(_.range(16, 30), 5),
      _.sample(_.range(31, 45), 5),
      _.sample(_.range(46, 60), 5),
      _.sample(_.range(61, 75), 5),
    ]
    map[2][2] = 0 // NOTE: Overwrite at Central // TODO: Compute central position
    var transposed = _.zip.apply(this, map)
    commit('updateCardMap', transposed)
  },
  toggleSelection: function ({ state, commit }, rc) {
    var r = rc['r']
    var c = rc['c']
    var v = !state.selection.map[r][c]
    var payload = { r, c, v }
    commit('updateSelectionMap', payload)
  }
}

const getters = {
  card_id: (state) => {
    return state.card.id
  },
  card_map: (state) => {
    return state.card.map
  },
  selection_map: (state) => {
    return state.selection.map
  }
}

import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  strict: debug,
  plugins: debug ? [createLogger(), createPersistedState()] : [createPersistedState()]
})