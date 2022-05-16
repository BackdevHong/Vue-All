<template>
	<div>
		<div v-for="user in users">{{ user.title }}</div>
	</div>
</template>

<script>
import { fetchAskList } from "../api/index";

export default {
	data() {
		return {
			users: [],
		};
	},
	created() {
		var vm = this;
		fetchAskList()
			.then((responce) => {
				console.log(responce);
				vm.users = responce.data;
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
</script>

<style></style>
