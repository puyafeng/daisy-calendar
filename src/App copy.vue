<template>
	<div id="app">
		<div style="height:500px;width:500px">
			<calendar @onDateChange="onDateChange" @onMonthChange="onMonthChange">
				<template #draw="{extra}">
					<div v-if="extra" style="width:40px;height:40px;">
						<CircleProgress
							:width="40"
							:radius="2"
							:progress="10"
							:isAnimation="true"
						>
							<span style="font-size:12px">{{ extra }}%</span>
						</CircleProgress>
					</div>
				</template>
			</calendar>
		</div>
	</div>
</template>

<script>
import calendar from "./plugins/calendar.vue";
import CircleProgress from "vue-circleprogressbar";
import _ from "lodash";
export default {
	components: {
		calendar,
		CircleProgress
	},
	methods: {
		onDateChange(date) {
			// alert(date);
		},
		onMonthChange: _.debounce(function(date, callback) {
			console.log(date.getMonth() + 1);
			setTimeout(function() {
				Promise.resolve([1, 2]).then(res => {
					callback(new Date(2021, 5, 7), 5);
					callback(new Date(2021, 5, 9), 3);
					callback(new Date(2021, 4, 10), 10);
				});
			}, 2000);
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
}
</style>
