<template>
  <div class="responses-body">
    <div class="response-container">
      <div class="container-heading">Polls that you responded to</div>
      <div class="polls-list">
        <div v-for="polls in yourdumbpolls" :key="polls.heading">
          <PollListItem :viewPoll="viewPoll" :polls="polls" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js">
</script>

<style lang="scss">
@import "./style.scss";
</style>
