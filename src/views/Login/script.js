export default {
  name: "Login",
  data() {
    return {
      isResponding: false,
    };
  },
  methods: {
    toggleResponding(value) {
      this.isResponding = value;
    },
  },
};
