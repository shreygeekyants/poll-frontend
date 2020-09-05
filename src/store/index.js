import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarVisible: screen.width > 768 ? true : false,
  },
  mutations: {
    changeSidebarVisibility(state) {
      state.sidebarVisible = !state.sidebarVisible;
    },
  },
  actions: {
    toggleSidebar({ commit }) {
      commit("changeSidebarVisibility");
    },
  },
  modules: {},
});
