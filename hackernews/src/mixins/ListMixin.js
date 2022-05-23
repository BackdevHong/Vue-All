export default {
	created() {
		this.$store.dispatch("FETCH_SPIN", true);
		this.$store
			.dispatch("FETCH_LIST", this.$route.name)
			.then(() => {
				this.$store.dispatch("FETCH_SPIN", false);
				console.log("fetched");
			})
			.catch((error) => {
				this.$store.dispatch("FETCH_SPIN", true);
				console.log(error);
			});
	},
};
