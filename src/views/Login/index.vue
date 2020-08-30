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
        <div v-show="!isResponding">
          Login to create poll
        </div>
        <div v-show="isResponding">
          Have a Survey ID?
        </div>

        <div class="form-container-login" v-show="!isResponding">
          <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
            <el-form-item label="Email Address" prop="email">
              <el-input
                v-model="loginForm.email"
                placeholder="someone@xyz.com"
              ></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input
                type="password"
                v-model="loginForm.password"
                placeholder="8 characters minimum"
              ></el-input>
            </el-form-item>
            <el-button
              type="primary"
              @click="login"
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

        <div class="form-container-response" v-show="isResponding">
          <el-form
            :model="responseForm"
            :rules="responseRules"
            ref="responseForm"
          >
            <el-form-item label="Survey ID" prop="surveyId">
              <el-input v-model="responseForm.surveyId"></el-input>
            </el-form-item>
            <el-button
              @click="loginAsResponder"
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
