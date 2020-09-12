import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTyperPlugin from "vue-typer";
import ElementUI from "element-ui";
import ProgressBar from "vue-progressbar-component";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import "element-ui/lib/theme-chalk/index.css";
import "../node_modules/@mdi/font/css/materialdesignicons.min.css";

import "./assets/scss/element-variables.scss";
import "./assets/scss/global.css";

Vue.config.productionTip = false;
Vue.use(VueTyperPlugin);
Vue.use(ElementUI);
Vue.component("progress-bar", ProgressBar);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
