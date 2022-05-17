<template>
	<div>
		<!-- eslint-disable -->
		<p v-for="ask in this.$store.state.ask">
			<router-link :to="`/item/${ask.id}`">
				{{ ask.title }}
			</router-link>
			<small
				>{{ ask.time_ago }} by
				<router-link :to="`/user/${ask.user}`">{{
					ask.user
				}}</router-link></small
			>
		</p>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters({
			fetchedAsk: "fetchedAsk",
		}),
	},
	created() {
		this.$store.dispatch("FETCH_ASK");
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

div > p > small > a {
	text-decoration: none;
	color: black;
}

div > p > small > a:after {
	color: black;
}

div > p > small > a:hover {
	color: pink;
	transition: all 0.4s;
}
</style>
