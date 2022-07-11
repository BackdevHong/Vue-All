<template>
	<div>
		<h1>회원 가입 페이지</h1>
		<signup-form></signup-form>
	</div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
export default {
	components: {
		SignupForm,
	},
};
</script>

<style scoped>
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
