export default {
  name: "CreatePoll",
  data() {
    return {
      pollForm: {
        title: "",
        description: "",
        answerOptions: [
          { key: 1, value: "" },
          { key: 2, value: "" },
          { key: 3, value: "" },
        ],
      },
    };
  },
  mounted() {
    console.log(screen.width, "*** screen");
  },
  methods: {
    addOption() {
      let node = this.pollForm.answerOptions;
      this.pollForm.answerOptions.push({
        key: node[node.length - 1].key + 1,
        value: "",
      });
    },
    removeOption(item) {
      var index = this.pollForm.answerOptions.indexOf(item);
      if (index !== -1) {
        this.pollForm.answerOptions.splice(index, 1);
      }
    },
  },
};
