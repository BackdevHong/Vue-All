<template>
	<div id="app">
		<tool-bar></tool-bar>
		<router-view v-slot="{ Component }">
			<transition name="page" mode="out-in">
				<component :is="Component"></component>
			</transition>
		</router-view>
	</div>
</template>

<script>
import ToolBar from "./components/ToolBar";

export default {
	components: {
		ToolBar,
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
