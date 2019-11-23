import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    subjects: {
      'Saintek': ['Fisika', 'Biologi'],
      'Soshum': ['Ekonomi']
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
