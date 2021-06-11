<template>
	<div id="app">
		<div style="height:400px;width:400px">
			<calendar
				@onDateChange="onDateChange"
				@onMonthChange="onMonthChange"
				:seedDate="new Date()"
			>
				<template #default="{date,tool, data}">
					<div class="day-holder">
						<div
							v-if="tool.isSameMonth"
							:class="[tool.isSelectDay ? 'selected' : '', 'day']"
						>
							{{ date.getDate() }}
						</div>
						<div v-if="data" class="dot-holder">
							<div v-for="index in data" class="dot" :key="'dot' + index"></div>
						</div>
					</div>
				</template>
			</calendar>
		</div>
	</div>
</template>

<script>
import calendar from "./plugins/calendar.vue";
import _ from "lodash";
export default {
	components: {
		calendar
	},
	methods: {
		onDateChange(date) {
			// alert(date);
		},
		onMonthChange: _.debounce(function(date, callback) {
			console.log(date.getMonth() + 1);
			setTimeout(function() {
				Promise.resolve([1, 2]).then(res => {
					callback(new Date(2021, 5, 7), 2);
					callback(new Date(2021, 5, 9), 1);
					callback(new Date(2021, 4, 10), 3);
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

.day-holder {
	width: 100%;
	height: 100%;
	position: relative;
}
.day {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	// width: 100%;
	// height: 100%;
	border-radius: 4px;
	cursor: pointer;
}
.selected {
	min-width: 25px;
	min-height: 25px;
	background-color: rgba(39, 5, 131, 0.5);
	color: white;
}
.dot-holder {
	position: absolute;
	bottom: 0px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	.dot {
		margin: 1px;
		width: 4px;
		height: 4px;
		border-radius: 4px;
		background-color: rgb(37, 30, 30);
	}
}
</style>
