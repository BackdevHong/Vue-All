<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">아이디: </label>
					<input type="text" id="username" v-model="username" />
					<p class="validation-text">
						<span
							class="warning"
							v-if="!isUsernameValid && username"
						>
							이메일을 입력해주세요!
						</span>
					</p>
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
					class="btn"
				>
					회원 가입
				</button>
				<p>{{ logMessage }}</p>
			</form>
		</div>
	</div>
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
