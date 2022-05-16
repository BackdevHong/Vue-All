<template>
	<div>
		<!-- eslint-disable -->
		<p v-for="item in this.$store.state.news">
			<a v-bind:href="item.url">
				{{ item.title }}
			</a>
			<small>
				{{ item.time_ago }} by
				<router-link to="/user">
					{{ item.user }}
				</router-link>
			</small>
		</p>
	</div>
</template>

<script>
// import { fetchNewsList } from "../api/index";

export default {
	created() {
		this.$store.dispatch("FETCH_NEWS");
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

div > p > a,
small > a {
	text-decoration: none;
	color: black;
}

div > p > a:after,
small > a:after {
	color: black;
}

div > p > a:hover,
small > a:hover {
	color: pink;
	transition: all 0.4s;
}
</style>
