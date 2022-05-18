<template>
	<list-item></list-item>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";
export default {
	components: {
		ListItem,
	},
	created() {
		bus.$emit("start:spinner");
	},
};
</script>

<style></style>
