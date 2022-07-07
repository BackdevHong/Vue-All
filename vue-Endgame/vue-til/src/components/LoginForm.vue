<template>
	<div>
		<form @submit.prevent="submitForm">
			<div>
				<label for="username">id:</label>
				<input type="text" id="username" v-model="username" />
			</div>
			<div>
				<label for="password">pw:</label>
				<input type="text" id="password" v-model="password" />
			</div>
			<button type="submit">로그인</button>
			<p>{{ logMessage }}</p>
		</form>
	</div>
</template>

<script>
import { loginUser } from "@/api/index";
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
				this.initForm();
			} catch (error) {
				this.logMessage = error.response.data;
				this.initForm();
			}
		},
		initForm() {
			this.username = null;
			this.password = null;
		},
	},
};
</script>

<style lang="scss" scoped></style>
