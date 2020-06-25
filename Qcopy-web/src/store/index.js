import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let UserInfo = {}
if (sessionStorage.UserInfo) {
  UserInfo = JSON.parse(sessionStorage.UserInfo)
}
export default new Vuex.Store({
  state: {
    UserInfo: UserInfo,
  },
  mutations: {},
  actions: {},
  modules: {}
})