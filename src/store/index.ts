import { createStore } from 'vuex'

export default createStore({
  state: {
    currentTab: 'home',
    isLoggedIn: false
  },
  getters: {
    currentTab(state){
      return state.currentTab
    },
    isLoggedIn(state){
      return state.isLoggedIn
    }
  },
  mutations: {
    SET_CURRENT_TAB(state, newTab){
      state.currentTab = newTab;
    },
    TOGGLE_LOGIN_STATE(state){
      state.isLoggedIn = !state.isLoggedIn;
    }
  },
  actions: {
    handleTabChange({commit}, newTab){
      commit('SET_CURRENT_TAB', newTab);
    },
    toggleLogin({commit}){
      commit('TOGGLE_LOGIN_STATE');
    }
  },
  modules: {
  }
})
