import {createStore} from 'vuex'

export default createStore({
  state: {
    id: null
  },
  getters: {
    getOne(state){
      return state.id
    }
  },
  mutations: {
    getId(state, payload){
      state.id = payload
    }
  },
  actions: {}
})
