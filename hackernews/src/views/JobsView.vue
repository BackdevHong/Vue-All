<template>
	<div>
		<!-- eslint-disable -->
		<p v-for="job in this.$store.state.jobs">
			<a v-bind:href="job.url">
				{{ job.title }}
			</a>
			<small v-if="job.domain != null">
				{{ job.time_ago }}, {{ job.domain }}
			</small>
			<small v-else="job.domain == null">
				{{ job.time_ago }}, domain not found
			</small>
		</p>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch("FETCH_JOBS");
	},
};
</script>

<style scoped>
div > p {
	border: 1px solid black;
	border-radius: 5px;
	width: 80%;
	margin: 0 auto;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 5px 5px 5px;
}

div > p > a {
	text-decoration: none;
	color: black;
}

div > p > a:after {
	color: black;
}

div > p > a:hover {
	color: pink;
	transition: all 0.4s;
}
</style>
