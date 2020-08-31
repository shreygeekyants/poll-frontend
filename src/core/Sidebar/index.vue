<template>
  <el-menu
    :collapse="false"
    class="sidebar"
    default-active="2"
    background-color="#F2CD5D"
    text-color="black"
    active-text-color="#5398BE"
  >
    <el-menu-item index="1">
      <span>Navigator One</span>
    </el-menu-item>
    <el-menu-item index="2">
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3">
      <span>Navigator Three</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
