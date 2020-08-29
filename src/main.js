import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTyperPlugin from "vue-typer";
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import "./assets/scss/element-variables.scss";
import "./assets/scss/global.css";

Vue.config.productionTip = false;
Vue.use(VueTyperPlugin);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
