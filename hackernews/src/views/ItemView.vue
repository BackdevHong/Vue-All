<template>
	<div>
		<p>{{ asksInfo.title }}</p>
		<p v-html="asksInfo.content" class="q"></p>
		답변 ( {{ asksInfo.comments_count }}개 )
		<div>
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
};
</script>

<style scoped>
.q {
	border: 1px solid black;
	border-radius: 5px;
}

.a {
	width: 90%;
	border-bottom: 1px solid black;
	padding: 5px 5px 5px 5px;
	padding-bottom: 4px;
	margin: 0 auto;
}
</style>
