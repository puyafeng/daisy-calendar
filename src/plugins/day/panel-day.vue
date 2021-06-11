<template>
	<div class="dot-day-r">
		<div class="day-holder-r" v-if="$attrs">
			<div
				v-if="$attrs.tool.isSameMonth"
				:class="[$attrs.tool.isSelectDay ? 'selected-r' : '', 'day-r']"
			>
				{{ $attrs.date.getDate() }}
				<div class="textholder-r" v-if="$attrs.data && $attrs.data.length">
					<ol>
						<li v-for="item in $attrs.data" :key="item">
							{{ item }}
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	created() {}
};
</script>
<style lang="scss" scoped>
* {
	box-sizing: border-box;
}
li,
ol,
ul {
	margin: 0;
	padding: 0;
}
.dot-day-r {
	height: 100%;
	width: 100%;
	position: relative;
	&:last-child {
		border-top: 1px solid #2c3e50;
	}
}
.day-holder-r {
	width: 100%;
	height: 100%;
	position: relative;
}
.day-r {
	position: absolute;
	top: 16px;
	border-radius: 4px;
	cursor: pointer;
}
.selected-r {
	min-width: 25px;
	min-height: 25px;
	background-color: rgba(39, 5, 131, 0.5);
	color: white;
}
.textholder-r {
	position: absolute;
	top: 36px;
	text-align: left;
	left: -0px;
	padding-left: 10px;
	width: 85px;
	font-size: 10px;
	height: 50px;
}
</style>
