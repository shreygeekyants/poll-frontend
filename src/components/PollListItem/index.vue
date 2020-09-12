<template>
  <div class="poll-list-item" @click="viewPoll('/view-poll', polls)">
    <div class="left-container">
      <img src="@/assets/images/bar.svg" alt />
    </div>
    <div class="right-container">
      <div>
        <div class="poll-heading">{{ polls.heading }}</div>
        <div class="poll-subheading">{{ polls.created }}</div>
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
  props: ["viewPoll", "polls"],
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
