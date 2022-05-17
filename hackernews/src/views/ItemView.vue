<template>
	<div>
		<user-profile :info="asksInfo">
			<template v-slot:username>
				<router-link :to="`/user/${asksInfo.user}`" class="link">{{
					asksInfo.user
				}}</router-link>
			</template>
			<template v-slot:time>
				{{ asksInfo.time_ago }}
			</template>
		</user-profile>
		<h2>{{ asksInfo.title }}</h2>
		<p v-html="asksInfo.content" class="q"></p>
		<br />
		답변 ( {{ asksInfo.comments_count }}개 )
		<div class="outline">
			<p
				v-for="comments in asksInfo.comments"
				:key="comments"
				class="a"
				v-html="comments.content"
			></p>
		</div>
	</div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
	computed: {
		asksInfo() {
			return this.$store.state.asks;
		},
		commentsInfo() {
			return this.$store.state.asks.comments;
		},
	},
	created() {
		const id = this.$route.params.id;
		this.$store.dispatch("FETCH_ASKS", id);
	},
	components: {
		UserProfile,
	},
};
</script>

<style scoped>
.q,
.a {
	width: 90%;
	margin: 0 auto;
	word-break: break-all;
}
.q {
	border: 1px solid black;
	border-radius: 5px;
}

.a {
	border-bottom: 1px solid black;
	padding: 5px 5px 5px 5px;
	padding-bottom: 4px;
}

.link {
	text-decoration: none;
	color: black;
}

.link:hover {
	color: pink;
	transition: 0.4s;
}
</style>
