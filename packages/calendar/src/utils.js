export default {
	calcMonthMatrix(seedDate = new Date(), weekStart = 1) {
		//1.通过种子日期计算出本月第一天
		let firstDateOfMonth = new Date(
			seedDate.getFullYear(),
			seedDate.getMonth(),
			1
		);
		//2.获取第一天是周几
		let firstDayOfWeek = firstDateOfMonth.getDay();
		//3.根据一周起始日计算（各地习惯不同）本月1号的未知
		if (weekStart < 0 || weekStart > 6) {
			throw new Error(
				"一周的起始天数只能在0～6的范围，0~6分别代表周天~周六为起始日期"
			);
		}
		//重排周数组，并获取1号的位置
		let postion = [0, 1, 2, 3, 4, 5, 6]
			.map(ele => {
				let rs = ele + weekStart;
				return rs >= 7 ? rs - 7 : rs;
			})
			.indexOf(firstDayOfWeek);

		//构造6*7数组
		let year = firstDateOfMonth.getFullYear();
		let month = firstDateOfMonth.getMonth();
		let matrix = [];
		for (let i = 0; i < 6; i++) {
			matrix[i] = [];
			for (let j = 0; j < 7; j++) {
				matrix[i][j] = new Date(year, month, i * 7 + (j + 1) - postion);
			}
		}
		return matrix;
	}
};
