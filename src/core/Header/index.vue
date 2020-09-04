<template>
  <header>
    <div class="sidebar-logo-container">
      <el-button @click="showSidebar" icon="mdi mdi-menu"></el-button>
      <img src="@/assets/images/logo.svg" width="40%" alt />
      <div class="app-name">SURWAY</div>
    </div>
    <div class="sidebar-welcome-text">Hello, Shrey</div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    showSidebar() {
      this.$store.dispatch("toggleSidebar");
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
