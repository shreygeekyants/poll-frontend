export default {
  name: "Login",
  data() {
    return {
      isResponding: false,
      loginForm: {
        email: "",
        password: "",
      },
      responseForm: {
        surveyId: "",
      },
      loginRules: {
        email: [
          { required: "true", trigger: "blur", message: "Email is required" },
        ],
        password: [
          {
            required: "true",
            trigger: "blur",
            message: "Password is required",
          },
          { min: 8, message: "Length should be 8 minimum", trigger: "blur" },
        ],
      },
      responseRules: {
        surveyId: [
          {
            required: "true",
            trigger: "blur",
            message: "Survey ID is required",
          },
        ],
      },
    };
  },
  methods: {
    toggleResponding(value) {
      this.isResponding = value;
    },
    goToSignup() {
      this.$router.push("/signup");
    },
    login() {
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          this.$router.push("/dashboard");
        }
      });
    },
    loginAsResponder() {
      this.$refs["responseForm"].validate((valid) => {
        console.log(valid);
      });
    },
  },
};
