import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage,
});
export default new Vuex.Store({
  state: {
    sidebarVisible: screen.width > 768 ? true : false,
    currentPoll: null,
  },
  mutations: {
    changeSidebarVisibility(state) {
      state.sidebarVisible = !state.sidebarVisible;
    },
    changeCurrentPoll(state, payload) {
      state.currentPoll = payload;
    },
  },
  actions: {
    toggleSidebar({ commit }) {
      commit("changeSidebarVisibility");
    },
    setCurrentPoll({ commit }, currentPoll) {
      commit("changeCurrentPoll", currentPoll);
    },
  },
  modules: {},
  plugins: [vuexLocalStorage.plugin],
});
