<template>
	<div class="L-Form">
		<form @submit.prevent="submitForm">
			<div>
				<label for="username">id:</label><br />
				<input type="text" id="username" v-model="username" />
			</div>
			<div>
				<label for="password">pw:</label>
				<input type="text" id="password" v-model="password" />
			</div>
			<button type="submit" :disabled="!isUsernameValid || !password">
				로그인
			</button>
			<p>{{ logMessage }}</p>
		</form>
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

<style lang="scss" scoped>
.L-Form {
	width: 200px;
	padding: 30px;
	background-color: white;
	height: 80px;
	align-items: center;
	margin: 0 auto;
}
</style>
