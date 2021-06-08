<template>
	<div id="app">
		<div style="height:300px;width:100%">
			<calendar :firstDay="12"> </calendar>
		</div>
	</div>
</template>

<script>
import calendar from "./plugins/calendar.vue";
export default {
	components: {
		calendar
	},
	name: "App"
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
