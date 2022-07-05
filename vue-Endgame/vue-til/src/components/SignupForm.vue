<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">아이디: </label>
			<input type="text" id="username" v-model="username" />
		</div>
		<div>
			<label for="password">비밀번호: </label>
			<input type="text" id="password" v-model="password" />
		</div>
		<div>
			<label for="nickname">닉네임: </label>
			<input type="text" id="nickname" v-model="nickname" />
		</div>
		<button type="submit">login</button>
	</form>
</template>

<script>
import { registerUser } from "@/api/index";

export default {
	data() {
		return {
			username: "",
			password: "",
			nickname: "",
		};
	},
	methods: {
		submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			registerUser(userData);
		},
	},
};
</script>

<style lang="scss" scoped></style>
