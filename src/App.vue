<template>
  <div id="app">
    <Header />
    <div :style="{display:'flex', height:'88vh'}">
      <Sidebar v-if="auth" />
      <div class="main">
        <!-- <transition name="slide-fade"> -->
        <router-view />
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/core/Sidebar";
import Header from "@/core/Header";
import { get } from "lodash";
export default {
  computed: {
    auth() {
      return get(this.$route, "meta.sidebar", true);
    },
  },
  components: {
    Sidebar,
    Header
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100%;
}
.main {
  /* display: flex; */
  height: 100%;
  width: 100%;
  overflow: auto;
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
