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
		<button type="submit">회원 가입</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from "@/api/index";

export default {
	data() {
		return {
			// form values
			username: "",
			password: "",
			nickname: "",
			// log
			logMessage: "",
		};
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData);
			this.logMessage = `${data.username}님! 회원가입이 완료되었습니다! 환영합니다!`;
			this.initForm();
		},
		initForm() {
			this.username = null;
			this.password = null;
			this.nickname = null;
		},
	},
};
</script>

<style lang="scss" scoped></style>
