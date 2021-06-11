<template>
	<div v-if="matrix" class="daisy-calendar__root">
		<div class="daisy-calendar__nav">
			<slot name="navbar" :seedDate="config.seedDate">
				<i class="icon iconfont icon-jiantou-zuo" @click="lastMonth"></i>
				<span>{{
					config.seedDate.getFullYear() +
						"年" +
						(config.seedDate.getMonth() + 1) +
						"月"
				}}</span>
				<i class="icon iconfont icon-jiantou-you" @click="nextMonth"></i>
			</slot>
		</div>
		<div class="daisy-calendar__weekbar">
			<div
				v-for="day in 7"
				:key="'week' + day"
				class="daisy-calendar__weekbar-item daisy-calendar__border"
			>
				<div>
					{{ config.mondayToSunday[day - 1] }}
				</div>
			</div>
		</div>
		<div class="daisy-calendar__panel">
			<div
				class="daisy-calendar__panel-row"
				:key="rowIndex"
				v-for="(row, rowIndex) in matrix"
			>
				<div
					class="daisy-calendar__panel-date daisy-calendar__border"
					:key="rowIndex + '-' + colIndex"
					v-for="(date, colIndex) in row"
					@click="clickDate(date)"
				>
					<slot
						:date="date"
						:seedDate="config.seedDate"
						:data="data(date)"
						:tool="{
							isSameMonth: isSameMonth(date, config.seedDate),
							isSelectDay: isSameDay(date, selectDate),
							isToday: isSameDay(date, new Date())
						}"
					>
						<div>
							<div v-if="isSameMonth(date, config.seedDate)">
								{{ date.getDate() }}
							</div>
						</div>
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import utils from "./utils.js";
let files = require.context("./day", false, /.*\.vue$/);
let components = {};
files.keys().forEach(key => {
	components[key.replace(/\.\/(.*)\.vue/, "$1")] = files(key).default;
});
export default {
	components: {
		...components
	},
	data() {
		const defaultConfig = {
			seedDate: new Date(),
			startOfWeek: 1,
			mondayToSunday: ["一", "二", "三", "四", "五", "六", "日"]
		};
		return {
			defaultConfig,
			config: { ...defaultConfig, ...this.$attrs },
			selectDate: defaultConfig.seedDate,
			matrix: null,
			box: {}
		};
	},
	computed: {
		data() {
			let self = this;
			return date => {
				return self.box[date.toGMTString()];
			};
		}
	},
	methods: {
		calcMonthMatrix(
			seedDate = this.config.seedDate,
			startOfWeek = this.config.startOfWeek
		) {
			return utils.calcMonthMatrix(seedDate, startOfWeek);
		},
		changeMonth(delta) {
			let seedDate = this.config.seedDate;
			this.config.seedDate = new Date(
				seedDate.getFullYear(),
				seedDate.getMonth() + delta,
				1
			);
			this.$emit(
				"onMonthChange",
				this.config.seedDate,
				this.saveBox.bind(this)
			);
		},
		saveBox(date, data) {
			this.box = { ...this.box, ...{ [date.toGMTString()]: data } };
		},
		nextMonth() {
			this.changeMonth(1);
		},
		lastMonth() {
			this.changeMonth(-1);
		},
		clickDate(date) {
			if (this.isSameDay(this.selectDate, date)) {
				//点击来相同的时间
			} else {
				this.selectDate = date;
				this.$emit("onDateChange", date);
			}
		},
		isSameDay(d1, d2) {
			return this.isSameMonth(d1, d2) && d1.getDate() === d2.getDate();
		},
		isSameMonth(d1, d2) {
			return this.isSameYear(d1, d2) && d1.getMonth() === d2.getMonth();
		},
		isSameYear(d1, d2) {
			return d1.getFullYear() === d2.getFullYear();
		},
		isWeekDay(date) {
			return date.getDay() % 6 !== 0;
		},
		getExtraByDate(date) {
			return this.box[date.toGMTString()];
		}
	},
	created() {
		// this.matrix = this.calcMonthMatrix();
		this.changeMonth(0);
		this.config.mondayToSunday = [0, 1, 2, 3, 4, 5, 6]
			.map(ele => {
				let rs = ele + this.config.startOfWeek;
				return rs >= 7 ? rs - 7 : rs;
			})
			.map(index => {
				return this.config.mondayToSunday[index - 1 < 0 ? 6 : index - 1];
			});
	},
	watch: {
		"config.seedDate": {
			handler(newValue, oldValue) {
				if (
					!!!oldValue ||
					newValue.getFullYear() !== oldValue.getFullYear() ||
					newValue.getMonth() !== oldValue.getMonth()
				) {
					this.matrix = this.calcMonthMatrix();
				}
			},
			immediate: true
		},
		"config.startOfWeek": {
			handler(newValue, oldValue) {
				this.matrix = this.calcMonthMatrix();
			},
			immediate: false
		}
	}
};
</script>

<style lang="scss">
$font-color: #2c3e50;
$border-color: #2c3e50;
$border: 1px solid $border-color;
.daisy-calendar__root {
	color: $font-color;
	padding: 10px;
	width: 100%;
	height: 100%;
	box-sizing: content-box;
	display: flex;
	flex-direction: column;
	border: $border;
	border-radius: 8px;
	.daisy-calendar__nav {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		i {
			cursor: pointer;
		}
	}
	.daisy-calendar__weekbar {
		flex: 1;
		display: flex;
		.daisy-calendar__weekbar-item {
			flex: 1;
			height: 100%;
		}
	}
	.daisy-calendar__panel {
		flex: 6;
		.daisy-calendar__panel-row {
			box-sizing: border-box;
			width: 100%;
			height: 16.66%;
			display: flex;
			.daisy-calendar__panel-date {
				box-sizing: border-box;
				flex: 1;
			}
		}
	}
	.daisy-calendar__border {
		// &:not(:last-child) {
		// 	border-top: $border;
		// 	border-right: $border;
		// }
		// &:last-child {
		// 	border-top: $border;
		// }
		border: none;
	}
}
</style>
