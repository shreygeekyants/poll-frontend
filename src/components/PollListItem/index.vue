<template>
  <div class="poll-list-item">
    <div class="left-container">
      <img src="@/assets/images/bar.svg" alt />
    </div>
    <div class="right-container">
      <div>
        <div class="poll-heading">{{heading}}</div>
        <div class="poll-subheading">{{subheading}}</div>
      </div>
      <div>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PollListItem",
  props: ["heading", "subheading"],
};
</script>

<style lang='scss'>
@import "./style.scss";
</style>