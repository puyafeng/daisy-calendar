<template>
	<div class="dot-day-root">
		<div class="day-holder" v-if="$attrs">
			<div
				v-if="$attrs.tool.isSameMonth"
				:class="[$attrs.tool.isSelectDay ? 'selected' : '', 'day']"
			>
				{{ $attrs.date.getDate() }}
			</div>
			<div v-if="$attrs.data" class="dot-holder">
				<div
					v-for="index in $attrs.data"
					class="dot"
					:key="'dot' + index"
				></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	created() {}
};
</script>

<style lang="scss">
.dot-day-root {
	height: 100%;
	width: 100%;
	position: relative;
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
