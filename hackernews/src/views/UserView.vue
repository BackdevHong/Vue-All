<template>
	<div>
		<p>사용자의 정보를 표시합니다.</p>
		<p>유저 닉네임 : {{ userInfo.id }}</p>
		<p>가입한 날 : {{ userInfo.created }}</p>
	</div>
</template>

<script>
export default {
	computed: {
		userInfo() {
			return this.$store.state.user;
		},
	},
	created() {
		const userName = this.$route.params.id;
		this.$store.dispatch("FETCH_USER", userName);
	},
};
</script>

<style scoped>
div > p {
	width: 80%;
	margin: 0 auto;
	margin-top: 20px;
}
</style>
