<template>
	<div id="app">
		<tool-bar></tool-bar>
		<router-view v-slot="{ Component }">
			<transition name="page" mode="out-in">
				<component :is="Component"></component>
			</transition>
		</router-view>
		<spinner :loading="loadingStatus"></spinner>
	</div>
</template>

<script>
import ToolBar from "./components/ToolBar";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus";

export default {
	components: {
		ToolBar,
		Spinner,
	},
	data() {
		return {
			loadingStatus: false,
		};
	},
	methods: {
		startSpinner() {
			this.loadingStatus = true;
		},
		endSpinner() {
			this.loadingStatus = false;
		},
	},
	created() {
		bus.$on("start:spinner", this.startSpinner);
	},
};
</script>

<style>
#app {
	text-align: center;
	color: #2c3e50;
}

.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
	opacity: 0;
}
</style>
