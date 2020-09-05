<template>
  <div id="app">
    <Header v-if="showHeader" />
    <div :class="showHeader ? 'app-container' : 'app-container-full'">
      <Sidebar v-if="showSidebar && sidebarVisible" />
      <div class="main">
        <router-view />
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
    showSidebar() {
      return get(this.$route, "meta.sidebar", true);
    },
    sidebarVisible() {
      return this.$store.state.sidebarVisible;
    },
    showHeader() {
      return get(this.$route, "meta.header", true);
    },
  },
  components: {
    Sidebar,
    Header,
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
.app-container {
  display: flex;
  height: 88vh;
}
.app-container-full {
  display: flex;
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

@media only screen and (max-width: 768px) {
  .app-container {
    display: flex;
    height: 100vh;
  }
}
</style>
