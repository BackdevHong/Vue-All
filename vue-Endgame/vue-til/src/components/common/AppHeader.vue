<template>
	<div>
		<header>
			<h2>TIL</h2>
			<div>
				<router-link to="/login">로그인</router-link>
				<router-link to="/signup">회원가입</router-link>
			</div>
		</header>
	</div>
</template>

<script>
export default {};
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
		.router-link-active {
			font-weight: 800;
		}
	}
	h2 {
		height: 10px;
		line-height: 10px;
		color: #ffffff;
		margin-left: 10px;
	}
}
</style>
