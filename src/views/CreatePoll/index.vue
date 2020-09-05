<template>
  <div class="create-poll-body">
    <div class="create-container">
      <div class="container-heading">Create New Poll</div>
      <div class="create-form-body">
        <el-form :model="pollForm" ref="pollForm">
          <el-form-item label="Title">
            <el-input placeholder="Enter your question here..." v-model="pollForm.title"></el-input>
          </el-form-item>
          <el-form-item label="Description (Optional)">
            <el-input
              placeholder="Describe your question here..."
              v-model="pollForm.description"
              type="textarea"
              rows="5"
            ></el-input>
          </el-form-item>
          <el-form-item :style="{ marginBottom: '5px' }" label="Answer Options"></el-form-item>
          <el-form-item v-for="option in pollForm.answerOptions" :key="option.key" label="Option: ">
            <div :style="{ display: 'flex' }">
              <el-input v-model="option.value"></el-input>
              <el-tooltip content="Remove Option">
                <el-button
                  @click.prevent="removeOption(option)"
                  class="danger-button"
                  type="danger"
                  icon="el-icon-circle-close"
                  v-if="![1, 2].includes(option.key)"
                ></el-button>
              </el-tooltip>
            </div>
          </el-form-item>
          <el-button @click="addOption" type="info">Add Option</el-button>
          <div class="submit-button">
            <el-button type="primary">Create Poll</el-button>
            <el-button @click="$router.push('/')">Cancel</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss">
@import "./style.scss";
</style>
