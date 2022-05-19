<template>
	<list-item></list-item>
</template>

<script>
import ListItem from "../components/ListItem.vue";
export default {
	components: {
		ListItem,
	},
	created() {
		this.emitter.emit("start:spinner");
	},
};
</script>

<style></style>
