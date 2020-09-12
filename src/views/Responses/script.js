import PollListItem from "@/components/PollListItem";
import { yourdumbpolls } from "../../consts";
export default {
  name: "Responses",
  data() {
    return {
      yourdumbpolls,
    };
  },
  components: {
    PollListItem,
  },
  methods: {
    viewPoll(url, currentPoll) {
      this.$store.dispatch("setCurrentPoll", currentPoll);
      this.$router.push(url);
    },
  },
};
