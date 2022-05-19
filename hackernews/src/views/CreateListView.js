import ListView from "./ListView.vue";
// import bus from "../utils/bus";
import { h } from "vue";

export default function createListView(name) {
	return {
		name: name,
		created() {
			// setTimeout(() => {
			this.$store
				.dispatch("FETCH_LIST", this.$route.name)
				.then(() => {
					// this.$store.state.spinner = false;
					console.log("fetched");
				})
				.catch((error) => {
					// this.$store.state.spinner = true;
					console.log(error);
				});
			// }, 3000);
		},
		render() {
			return h(ListView);
		},
	};
}
