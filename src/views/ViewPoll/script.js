import { get } from "lodash";

export default {
  name: "ViewPoll",
  data() {
    return {
      currentPoll: get(this.$store, "state.currentPoll", {}),
    };
  },
};
