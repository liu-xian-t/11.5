import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //存放数据
    list:[],
  },
  mutations: {
      collect(state,item){
        state.list.push(item)
      }
  },
  actions: {
  },
  modules: {
  }
})
