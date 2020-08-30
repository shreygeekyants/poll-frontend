<template>
  <div class="login">
    <div class="left-panel">
      <div class="heading">SURWAY</div>
      <div>
        <h1>
          Get your surveys done,
          <vue-typer
            erase-style="backspace"
            erase-delay="70"
            :text="['Easily.', 'Quickly.', 'Efficiently.']"
          ></vue-typer>
        </h1>
      </div>
    </div>
    <div class="right-panel">
      <div class="logo-container">
        <img src="@/assets/images/logo.svg" class="logo-design" alt="" />
      </div>
      <div class="login-container">
        <div v-if="!isResponding">
          Login to create poll
        </div>
        <div v-if="isResponding">
          Have a Survey ID?
        </div>

        <div class="form-container" v-if="!isResponding">
          <el-form>
            <el-form-item label="Email Address">
              <el-input placeholder="someone@xyz.com"></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input placeholder="8 characters minimum"></el-input>
            </el-form-item>
            <el-button
              type="primary"
              :style="{ marginTop: '4%', width: '100%' }"
              >Login</el-button
            >
            <div class="signup-text">
              Don't have an account? <span @click="goToSignup">Sign Up</span>
            </div>
          </el-form>
          <el-divider content-position="center">OR</el-divider>
          <el-button
            @click="toggleResponding(true)"
            type="info"
            :style="{ width: '100%' }"
            >Respond to a poll</el-button
          >
        </div>

        <div class="form-container" v-if="isResponding">
          <el-form>
            <el-form-item label="Survey ID">
              <el-input></el-input>
            </el-form-item>
            <el-button
              type="primary"
              :style="{ marginTop: '4%', width: '100%' }"
              >Submit
            </el-button>
          </el-form>
          <el-button
            type="info"
            :style="{ marginTop: '4%', width: '100%' }"
            @click="toggleResponding(false)"
            >Back to login
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./script.js"></script>

<style lang="scss">
@import "./style.scss";
</style>
