<template>
	<ul>
		<li v-for="item in items" :key="item">
			{{ item }}
		</li>
	</ul>
	<button @click="$emit('renew')">renew items</button>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style></style>
