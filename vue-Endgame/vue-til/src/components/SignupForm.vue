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
		<button
			type="submit"
			:disabled="!isUsernameValid || !password || !nickname"
		>
			회원 가입
		</button>
		<div v-if="!username" class="noEmail">
			아이디를 입력하지 않으셨습니다.
		</div>
		<div v-else-if="!isUsernameValid" class="noEmail">
			아이디가 이메일 형식에 맞지 않습니다.
		</div>
		<div v-else></div>
		<div v-if="!password" class="noEmail">
			비밀번호를 입력하지 않으셨습니다.
		</div>
		<div v-else></div>
		<div v-if="!nickname" class="noEmail">
			닉네임을 입력하지 않으셨습니다.
		</div>
		<div v-else></div>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { validateEmail } from "@/utils/validation";
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
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
};
</script>

<style lang="scss" scoped>
.noEmail {
	color: red;
}
</style>
