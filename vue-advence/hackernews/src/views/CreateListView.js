import ListView from "./ListView.vue";
// import bus from "../utils/bus";
import { h } from "vue";

export default function createListView(name) {
    return {
        name,
        created() {
            this.$store.dispatch('FETCH_SPIN', true);
            setTimeout(() => {
                this.$store
                    .dispatch("FETCH_LIST", this.$route.name)
                    .then(() => {
                        this.$store.dispatch('FETCH_SPIN', false);
                        console.log("fetched");
                        console.log(this.$store.state.spin);
                    })
                    .catch((error) => {
                        this.$store.dispatch('FETCH_SPIN', true);
                        console.log(error);
                        console.log(this.$store.state.spin);

                    });
            }, 3000);
        },
        render() {
            return h(ListView);
        },
    };
}
