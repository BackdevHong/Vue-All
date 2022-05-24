<template>
	<fetch-data url="https://jsonplaceholder.typicode.com/users/1">
		<template v-slot="{ response, loading }"></template>
	</fetch-data>
</template>

<script>
import FetchData from "./components/FetchData.vue";
export default {
	components: {
		FetchData,
	},
};
</script>

<style></style>
