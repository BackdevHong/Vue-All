<template>
	<div>
		<header>
			<router-link to="/" class="logo">TIL</router-link>
			<div>
				<!-- 1 -->
				<template v-if="isUserLogin">
					<span>{{ $store.state.username }}</span>
					<a href="javascript:;" @click="logoutUser">Logout</a>
				</template>
				<!-- 2 -->
				<template v-else>
					<router-link to="/login">로그인</router-link>
					<router-link to="/signup">회원가입</router-link>
				</template>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		logoutUser() {
			this.$store.commit("clearUsername");
			this.$router.push("/login");
		},
	},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;800&display=swap");

header {
	background-color: blueviolet;
	padding: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	div {
		height: 50px;
		line-height: 50px;
		a {
			margin-right: 10px;
			text-decoration: none;
			color: white;
			font-family: "Nanum Gothic", sans-serif;
		}
		span {
			margin-right: 10px;
			color: white;
		}
		.router-link-active {
			font-weight: 800;
		}
	}
	.logo {
		height: 45px;
		line-height: 45px;
		color: #ffffff;
		margin-left: 10px;
		text-decoration: none;
		font-size: 30px;
		font-weight: 800;
	}
}
</style>
