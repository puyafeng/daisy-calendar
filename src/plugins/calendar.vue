<template>
	<div v-if="matrix" class="daisy-calendar__root">
		<div class="daisy-calendar__nav">
			<i class="icon iconfont icon-jiantou-zuo" @click="lastMonth"></i>
			<span>{{
				this.config.seedDate.getFullYear() +
					"年" +
					(this.config.seedDate.getMonth() + 1) +
					"月"
			}}</span>
			<i class="icon iconfont icon-jiantou-you" @click="nextMonth"></i>
		</div>
		<div class="daisy-calendar__main">
			<div class="daisy-calendar__row">
				<div v-for="day in 7" :key="'week' + day" class="daisy-calendar__item">
					<div>
						{{ config.mondayToSunday[day - 1] }}
					</div>
				</div>
			</div>

			<div
				class="daisy-calendar__row"
				v-for="(row, rowIndex) in matrix"
				:key="rowIndex"
			>
				<div
					class="daisy-calendar__item"
					v-for="(item, colIndex) in row"
					:key="rowIndex + '-' + colIndex"
					@click="clickDate(item)"
				>
					<slot :date="item" :seedDate="config.seedDate" :data="$data">
						<div>
							<div v-if="isSameMonth(item, config.seedDate)">
								{{ item.getDate() }}
								<div>
									<slot
										name="draw"
										:extra="extraData(item)"
										:date="item"
									></slot>
								</div>
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
import Vue from "vue";
export default {
	data() {
		const defaultConfig = {
			seedDate: new Date(),
			startOfWeek: 1,
			mondayToSunday: ["一", "二", "三", "四", "五", "六", "日"]
		};
		return {
			defaultConfig,
			config: { ...defaultConfig, ...this.$attrs },
			selectDate: new Date(),
			matrix: null,
			box: {}
		};
	},
	computed: {
		extraData() {
			let self = this;
			return date => {
				console.log(date, self.box[date.toGMTString()]);
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
			// this.box[date.toGMTString()] = data;
			// this.$set(this.box, date.toGMTString(), data);
			// this.$forceUpdate();
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
		this.matrix = this.calcMonthMatrix();
		console.log(
			[0, 1, 2, 3, 4, 5, 6].map(ele => {
				let rs = ele + this.config.startOfWeek;
				return rs >= 7 ? rs - 7 : rs;
			})
		);
		this.config.mondayToSunday = [0, 1, 2, 3, 4, 5, 6]
			.map(ele => {
				let rs = ele + this.config.startOfWeek;
				return rs >= 7 ? rs - 7 : rs;
			})
			.map(index => {
				return this.config.mondayToSunday[index - 1 < 0 ? 6 : index - 1];
			});
		// console.log(this.config.mondayToSunday);
	},
	watch: {
		box: {
			handler(newValue, oldValue) {
				console.log(newValue);
			},
			deep: true, //深度遍历
			immediate: true
		},
		"config.seedDate": {
			handler(newValue, oldValue) {
				if (
					newValue.getFullYear() !== oldValue.getFullYear() ||
					newValue.getMonth() !== oldValue.getMonth()
				) {
					this.matrix = this.calcMonthMatrix();
				}
			},
			immediate: false
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
.daisy-calendar__root {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 12px;
	border: 1px solid #abc;
	border-radius: 8px;
}
.daisy-calendar__nav {
	display: flex;
	padding: 0 10px 10px 10px;
	justify-content: space-between;
	align-items: center;
	i {
		cursor: pointer;
	}
}
.daisy-calendar__main {
	// background-color: rgb(42, 66, 66);
	flex: 1;
	display: flex;
	flex-direction: column;
	.daisy-calendar__row {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		.daisy-calendar__item {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			flex: 1;
		}
	}
}
</style>
