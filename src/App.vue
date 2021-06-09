<template>
	<div id="app">
		<div style="height:300px;width:100%">
			<calendar
				@onDateChange="onDateChange"
				@onMonthChange="onMonthChange"
				:startOfWeek="0"
			>
				<template #default="{date,seedDate,data}">
					<div style="color:black">
						<div v-if="date.getMonth() === seedDate.getMonth()">
							<div
								v-if="
									data.selectDate.getFullYear() == date.getFullYear() &&
										data.selectDate.getMonth() == date.getMonth() &&
										data.selectDate.getDate() == date.getDate()
								"
								style="color:red"
							>
								{{ date.getDate() }}
							</div>
							<div v-else>
								{{ date.getDate() }}
							</div>
						</div>
						<div v-else style="color:#a0a0a0">
							{{ date.getDate() }}
						</div>
					</div>
				</template>

				<!-- <template #currentMonthDate>123</template>
				<template #otherMonthDate>123</template> -->
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
		onMonthChange: _.debounce(function(date) {
			console.log(date.getMonth() + 1);
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
