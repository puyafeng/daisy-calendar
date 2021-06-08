<template>
	<div class="daisy-calendar__root" v-if="matrix">
		<div
			class="daisy-calendar__row"
			v-for="(row, rowIndex) in matrix"
			:key="rowIndex"
		>
			<div
				class="daisy-calendar__item"
				v-for="(item, colIndex) in row"
				:key="rowIndex + '-' + colIndex"
			>
				<slot>{{ item.getMonth() + 1 + "月" + item.getDate() }}</slot>
			</div>
		</div>
	</div>
</template>

<script>
import utils from "./utils.js";
export default {
	data() {
		const config = {
			seedDate: new Date(),
			startOfWeek: 6,
			mondayToSunday: [
				"星期一",
				"星期二",
				"星期三",
				"星期四",
				"星期五",
				"星期六",
				"星期天"
			]
		};
		return {
			matrix: null
		};
	},
	created() {
		console.log(this.$attrs);
		this.matrix = utils.calcMonthMatrix();
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
		border: 1px solid red;
	}
}
</style>
