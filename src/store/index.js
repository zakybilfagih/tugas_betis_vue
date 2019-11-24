import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    subjects: {
      'Saintek': {
        'data':[
          {'nama': 'Fisika', 'video': ['https://www.youtube.com/embed/50FNaZeORBU'], 'link': [{'nama': 'Silabus Fisika', 'link':'www.google.com'},{'nama': 'Modul Fisika', 'link':'www.google.com'},{'nama': 'Latihan Fisika', 'link':'www.google.com'}]},
          {'nama': 'Biologi', 'video': ['https://www.youtube.com/embed/dQw4w9WgXcQ'], 'link': [{'nama': 'Silabus Biologi', 'link':'www.google.com'},{'nama': 'Modul Biologi', 'link':'www.google.com'},{'nama': 'Latihan Biologi', 'link':'www.google.com'}]}
        ]
      },
      'Soshum': {
        'data': [
          {'nama': 'Ekonomi', 'gambar': [{'nama':'Kurva di atas adalah kurva supply dan demand.', 'file': 'test.png'}]}
        ]
      }
    }
  },
  getters: {
    getSub: (state) => (main,id) => {
      return state.subjects[main]['data'][id]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
