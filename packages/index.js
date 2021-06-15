import calendar from "./calendar/index";
import "./assets/iconfont/iconfont.css";
const components = [calendar];
const install = function(Vue) {
	// 判断是否安装
	if (install.installed) return;
	components.map(component => {
		Vue.component(component.name, component);
	});
	// 判断是否是直接引入文件
	if (typeof window !== "undefined" && window.Vue) {
		install(window.Vue);
	}
};
export default {
	// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
	install,
	calendar
};
