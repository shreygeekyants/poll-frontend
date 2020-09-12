<template>
  <div class="view-poll-body">
    <div class="view-poll-container">
      <div class="container-heading">{{ currentPoll.heading }}</div>
      <div class="container-subheading">{{ currentPoll.subheading }}</div>
      <div class="options-container">
        <div
          class="progress"
          v-for="option in currentPoll.options"
          :key="option.value"
        >
          <div>
            <div>{{ option.value }}</div>
            <progress-bar :value="option.perc" bar-class="bg-success" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss">
@import "./style.scss";
</style>
