<template>
	<div id="app">
		<div style="height:800px;width:800px">
			<calendar @onDateChange="onDateChange" @onMonthChange="onMonthChange">
				<!-- <template #default="{date,seedDate}">
					<div style="color:black">
						<div v-if="date.getMonth() === seedDate.getMonth()">
							{{ date.getDate() }}
						</div>
						<div v-else style="color:#a0a0a0">
							{{ date.getDate() }}
						</div>
					</div>
				</template> -->
				<template #draw="{extra}">
					<progress-circle
						v-if="extra"
						:completed-steps="extra"
						:total-steps="10"
					></progress-circle>
				</template>
			</calendar>
		</div>
	</div>
</template>

<script>
import calendar from "./plugins/calendar.vue";
import { ProgressCircle } from "vue-progress-circle";
import _ from "lodash";
export default {
	components: {
		calendar,
		ProgressCircle
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
