import calendar from "../calendar/src/calendar.vue";
import "../assets/style/main.scss";
import "../assets/iconfont/iconfont.css";
calendar.install = function(Vue) {
	Vue.component(calendar.name, calendar);
};
export default calendar;
