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
            :text="['Easily', 'Quickly', 'Efficiently']"
          ></vue-typer>
        </h1>
      </div>
    </div>
    <div class="right-panel">
      <div class="logo-container">
        <img src="@/assets/images/Logo.svg" class="logo-design" alt="" />
      </div>
      <div class="login-container">
        Login to create poll
        <div class="form-container">
          <el-form>
            <el-form-item label="Email Address">
              <el-input placeholder="someone@xyz.com"></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input placeholder="minimum 8 characters"></el-input>
            </el-form-item>
            <el-button
              type="primary"
              :style="{ marginTop: '4%', width: '100%' }"
              >Login</el-button
            >
          </el-form>
          <el-divider content-position="center">OR</el-divider>
          <el-button type="info" :style="{ width: '100%' }"
            >Respond to a poll</el-button
          >
        </div>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Login",
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
