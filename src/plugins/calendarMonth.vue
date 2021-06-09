<template>
	<div class="daisy-calendar__root" v-if="matrix">
		<div v-for="day in 7" :key="'week' + day" class="daisy-calendar__row">
			<div class="daisy-calendar__item">
				{{ config.mondayToSunday[day] }}
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
				<slot :date="item" :seedDate="config.seedDate" :data="$data">{{
					item.getDate()
				}}</slot>
				<!-- <slot :date="item"></slot>
				<slot name="currentMonthDate"></slot>
				<slot name="otherMonthDate"> </slot> -->
			</div>
		</div>
	</div>
</template>

<script>
import utils from "./utils.js";
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
			matrix: null
		};
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
			this.$emit("onMonthChange", this.config.seedDate);
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
			console.log(this.$data);
		},
		isSameDay(d1, d2) {
			return this.isSameMonth(d1, d2) && d1.getDate() === d2.getDate();
		},
		isSameMonth(d1, d2) {
			return this.isSameYear(d1, d2) && d1.getMonth() === d2.getMonth();
		},
		isSameYear(d1, d2) {
			return d1.getFullYear() === d2.getFullYear();
		}
	},
	created() {
		this.matrix = this.calcMonthMatrix();
	},
	watch: {
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
	height: 100%;
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
	> * > * {
		// border: 1px solid red;
	}
}
</style>
