<template>
	<div class="user-container">
		<div>
			<i class="fas fa-user"></i>
		</div>
		<div class="si">
			<div class="user-description">
				<slot name="username"></slot>
			</div>
			<div class="time">
				<slot name="time"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		info: Object,
	},
	// computed: {
	// 	userInfo() {
	// 		return this.$store.state.user;
	// 	},
	// },
};
</script>

<style>
.user-container {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
}
.fa-user {
	font-size: 2.5rem;
}
.user-description {
	padding-left: 8px;
}
.time {
	font-size: 0.7rem;
	padding-left: 8px;
	color: #828282;
}
</style>
