<template>
	<div>
		<div v-for="user in fetchedAsk">{{ user.title }}</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		// ...mapState({ ask: (state) => state.ask }),
        ...mapGetters({
            fetchedAsk : 'fetchedAsk'
        })
	},
	created() {
		this.$store.dispatch("FETCH_ASK");
	},
};
</script>

<style></style>
