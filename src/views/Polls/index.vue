<template>
  <div class="polls-body">
    <div class="polls-container">
      <div class="container-heading">Polls that you created</div>
      <div class="polls-list">
        <div v-for="polls in yourdumbpolls" :key="polls.heading">
          <PollListItem :heading="polls.heading" :subheading="polls.subheading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./script.js'>
</script>

<style lang="scss">
@import "./style.scss";
</style>
