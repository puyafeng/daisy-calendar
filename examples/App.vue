<template>
	<div id="app">
		<div style="height:300px;width:300px">
			<calendar :seedDate="new Date()">
				<template #navbar=""></template>
				<template #weekbarItem="{weekdayName}">{{ weekdayName }}</template>
				<template #default="{date, tool, data}">
					<dot-day :date="date" :tool="tool" :data="data"></dot-day>
				</template>
			</calendar>
		</div>
	</div>
</template>

<script>
import calendar from "../packages/calendar/src/calendar.vue";
import dotDay from "./components/day/dot-day.vue";
import _ from "lodash";
export default {
	components: {
		calendar,
		dotDay
	},
	data() {
		return {};
	},
	methods: {
		onDateChange(date, setter, getter) {},
		onDateClick(date, setter, getter) {
			console.log(getter(date) || 0 + 1);
			setter(date, (getter(date) || 0) + 1);
		},
		onMonthChange: _.debounce(function(date, setter, getter) {
			setTimeout(function() {
				Promise.resolve([1, 2]).then(res => {
					setter(new Date(2021, 5, 7), 2);
					setter(new Date(2021, 5, 9), 1);
					setter(new Date(2021, 4, 10), 3);
				});
			}, 100);
		}, 1000)
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
	display: flex;
	flex-wrap: wrap;
	> div {
		margin: 15px 15px;
	}
}
</style>
