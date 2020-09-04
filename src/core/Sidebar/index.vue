<template>
  <transition name="slide">
    <el-menu
      :collapse="false"
      class="sidebar"
      default-active="1"
      background-color="#F2CD5D"
      text-color="black"
      active-text-color="#5398BE"
    >
      <div class="button-container">
        <el-button type="primary">Create New Poll</el-button>
      </div>
      <div class="dashboard-menu">
        <el-menu-item index="1">
          <i class="mdi mdi-view-dashboard"></i>
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="mdi mdi-poll"></i>
          <span>Your Polls</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="mdi mdi-comment-text"></i>
          <span>Your Responses</span>
        </el-menu-item>
      </div>
    </el-menu>
  </transition>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
