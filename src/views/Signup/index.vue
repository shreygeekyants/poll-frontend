<template>
  <div class="signup">
    <div class="signup-container">
      <div class="signup-text">Sign Up</div>

      <el-form>
        <el-form-item label="Full Name">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Email Address">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Set Password">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password">
          <el-input></el-input>
        </el-form-item>
        <div :style="{ display: 'flex' }">
          <el-button type="primary" @click="goToLogin">
            Submit Details
          </el-button>
          <el-button @click="$router.go(-1)">
            Cancel
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss">
@import "./style.scss";
</style>
