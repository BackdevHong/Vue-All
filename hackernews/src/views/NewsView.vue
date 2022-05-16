<template>
	<div>
		<div v-for="user in users">{{ user.title }}</div>
	</div>
</template>

<script>
// import { fetchNewsList } from "../api/index";

export default {
	data() {
		return {
			users: [],
		};
	},
	created() {
		this.$store.dispatch("FETCH_NEWS");
		// fetchNewsList()
		// 	.then((responce) => {
		// 		console.log(responce);
		// 		this.users = responce.data;
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	},
};
</script>

<style></style>
