<template>
	<div id="app">
		<div style="height:300px;width:300px">
			<calendar
				@onDateClick="onDateClick"
				@onDateChange="onDateChange"
				@onMonthChange="onMonthChange"
				:seedDate="new Date()"
			>
				<template #default="{date, tool, data}">
					<dot-day :date="date" :tool="tool" :data="data"></dot-day>
				</template>
			</calendar>
		</div>
		<div style="height:300px;width:300px">
			<calendar @onMonthChange="onMonthChange1" :seedDate="new Date()">
				<template #default="{date, tool, data}">
					<cp-day :date="date" :tool="tool" :data="data"></cp-day>
				</template>
			</calendar>
		</div>
		<div style="height:300px;width:300px">
			<calendar @onMonthChange="onMonthChange2" :seedDate="new Date()">
				<template #default="{date, tool, data}">
					<animal-day :date="date" :tool="tool" :data="data"></animal-day>
				</template>
			</calendar>
		</div>
		<div style="height:900px;width:100%">
			<calendar @onMonthChange="onMonthChange3" :seedDate="new Date()">
				<template #default="{date, tool, data}">
					<panel-day :date="date" :tool="tool" :data="data"></panel-day>
				</template>
			</calendar>
		</div>
	</div>
</template>

<script>
import calendar from "./plugins/calendar.vue";
import dotDay from "./components/day/dot-day.vue";
import cpDay from "./components/day/circle-progress-day";
import animalDay from "./components/day/animal-day.vue";
import panelDay from "./components/day/panel-day.vue";
import _ from "lodash";
export default {
	components: {
		calendar,
		dotDay,
		cpDay,
		animalDay,
		panelDay
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
		onMonthChange: _.debounce(function(date, callback) {
			setTimeout(function() {
				Promise.resolve([1, 2]).then(res => {
					callback(new Date(2021, 5, 7), 2);
					callback(new Date(2021, 5, 9), 1);
					callback(new Date(2021, 4, 10), 3);
				});
			}, 100);
		}, 1000),
		onMonthChange1: _.debounce(function(date, callback) {
			setTimeout(function() {
				Promise.resolve([1, 2]).then(res => {
					callback(new Date(2021, 5, 7), 50);
					callback(new Date(2021, 5, 9), 10);
					callback(new Date(2021, 5, 20), 80);
					callback(new Date(2021, 5, 24), 100);
				});
			}, 100);
		}, 1000),
		onMonthChange2: _.debounce(function(date, callback) {
			setTimeout(function() {
				Promise.resolve([1, 2]).then(res => {
					callback(new Date(2021, 5, 7), 50);
					callback(new Date(2021, 5, 9), 10);
					callback(new Date(2021, 5, 20), 80);
					callback(new Date(2021, 5, 24), 100);
				});
			}, 100);
		}, 1000),
		onMonthChange3: _.debounce(function(date, callback) {
			setTimeout(function() {
				Promise.resolve([1, 2]).then(res => {
					callback(new Date(2021, 5, 7), ["第一条任务", "下午卖鱼"]);
					callback(new Date(2021, 5, 9), ["上化学课", "打豆豆"]);
					callback(new Date(2021, 5, 24), ["和小伙伴踢球", "去公园玩"]);
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
