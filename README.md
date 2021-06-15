# 自定义日历

## 一、使用流程

### 1.安装

```
npm install daisy-calendar
```

### 2.导入

```
import calendar from "daisy-calendar";
Vue.use(calendar);
```

### 3.基本使用

```
<div style="width:100%;height:400px;">
    <calendar></calendar>
</div>
```

### 4.自定义显示方式

例如每月 1 号需要显示为“开始”字样，当然你可以做任何 diy，包括每天使用 canvas 画出也可以

```
<div style="width:100%;height:400px;">
    <calendar>
        <template #default="{date, tool}" class="day-holder">
          <div v-if="tool.isSameMonth">
            <div v-if="date.getDate() == 1">
              <span>开始</span>
            </div>
            <div v-else>
              {{ date.getDate() }}
            </div>
          </div>
        </template>
    </calendar>
</div>
```

## 二、属性、事件、插槽

seedDate: new Date(),
startOfWeek: 1,
mondayToSunday: ["一", "二", "三", "四", "五", "六", "日"]

### 属性

| 属性名         | 含义                                       | 默认值       |
| -------------- | ------------------------------------------ | ------------ |
| seedDate       | 使用该属性计算默认显示的月份               | 当天         |
| startOfWeek    | 一周第一天是星期几，0-6 分表表示周天到周六 | 1            |
| mondayToSunday | 周一到周天分别对应的 text 是什么           | 中文“一到日” |

### 事件

| 事件          | 含义                     |
| ------------- | ------------------------ |
| onDateClick   | 点击日期触发             |
| onDateChange  | 选中的日期发生改变时触发 |
| onMonthChange | 月份发生天改变时触发     |

### 插槽

| 插槽名  | 含义                                           | 参数                                                           |
| ------- | ---------------------------------------------- | -------------------------------------------------------------- |
| default | 绘制日布局的模版                               | date:格子日期 seedDate：种子日期 tool：判断工具 data：相关数据 |
| navbar  | 绘制日历导航的模版（上下月按钮、当前年月显示） | seedDate：种子日期                                             |
