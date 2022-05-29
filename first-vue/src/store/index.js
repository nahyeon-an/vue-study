import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    sidebar: false,
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    }
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setSidebar(state, sidebar) {
      state.sidebar = sidebar;
    }
  },
  actions: {
  },
  modules: {
  }
});
