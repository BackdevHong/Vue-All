<template>
	<fetch-data url="https://jsonplaceholder.typicode.com/users/1">
		<template v-slot="{ response, loading }">
			<div v-if="!loading">
				{{ response }}
			</div>
			<div v-else>Loading...</div>
		</template>
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
