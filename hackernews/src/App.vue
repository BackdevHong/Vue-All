<template>
	<div id="app">
		<tool-bar></tool-bar>
		<router-view></router-view>
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
</style>
