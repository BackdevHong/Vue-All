<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id:</label>
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
					<label for="password">pw:</label>
					<input type="text" id="password" v-model="password" />
				</div>
				<button
					type="submit"
					:disabled="!isUsernameValid || !password"
					class="btn"
				>
					로그인
				</button>
				<p>{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { loginUser } from "@/api/index";
import { validateEmail } from "@/utils/validation";

export default {
	data() {
		return {
			username: "",
			password: "",
			logMessage: "",
		};
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				this.$router.push("/main");
				this.logMessage = `${data.user.username}님! 환영합니다!`;
			} catch (error) {
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = null;
			this.password = null;
		},
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
};
</script>

<style lang="scss" scoped></style>
