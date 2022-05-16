<template>
	<div>
		<div v-for="user in $store.state.jobs">{{ user.title }}</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch("FETCH_JOBS");
	},
};
</script>

<style></style>
