import { createStore } from 'vuex'

export default createStore({
  state: {
    currentTab: 'home'
  },
  getters: {
    currentTab(state){
      return state.currentTab
    }
  },
  mutations: {
    SET_CURRENT_TAB(state, newTab){
      state.currentTab = newTab;
    }
  },
  actions: {
    handleTabChange({commit}, newTab){
      commit('SET_CURRENT_TAB', newTab);
    }
  },
  modules: {
  }
})
