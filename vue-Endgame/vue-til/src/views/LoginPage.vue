<template>
	<div>
		<h1>로그인 페이지</h1>
		<LoginForm></LoginForm>
	</div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
	components: {
		LoginForm,
	},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;800&display=swap");

h1 {
	width: 100%;
	height: 50px;
	line-height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Nanum Gothic", sans-serif;
}
</style>
