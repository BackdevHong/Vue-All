<template>
	<div>
		<input type="checkbox" :value="value" @change="toggleCheckBox" />
	</div>
</template>

<script>
export default {
	// @input 이벤트

	// :value 값

	props: ["value"],

	methods: {
		toggleCheckBox() {
			this.$emit("input", !this.value);
			console.log(this.value);
		},
	},
};
</script>
