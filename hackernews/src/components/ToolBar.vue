<template>
	<div class="Header">
		<router-link to="/News">News</router-link> |
		<router-link to="/Ask">Ask</router-link> |
		<router-link to="/Jobs">Jobs</router-link>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.Header {
	display: flex;
	line-height: 50px;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	width: 200px;
}
</style>
