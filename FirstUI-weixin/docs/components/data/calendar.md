# Calendar 日历

日历组件。

## 引入

```json
{
  "usingComponents": {
    "fui-calendar": "/components/firstui/fui-calendar/fui-calendar"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-calendar 
  show="{{show}}"
  bind:change="onChange">
</fui-calendar>
```

### 区间选择

```html
<fui-calendar 
  show="{{show}}"
  isRange
  bind:change="onChange">
</fui-calendar>
```

### 多选

```html
<fui-calendar 
  show="{{show}}"
  isMultiple
  bind:change="onChange">
</fui-calendar>
```

### 设置范围

```html
<fui-calendar 
  show="{{show}}"
  minDate="2024-01-01"
  maxDate="2024-12-31">
</fui-calendar>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示 | Boolean | `false` |
| isRange | 是否区间选择 | Boolean | `false` |
| isMultiple | 是否一次性加载一年数据 | Boolean | `false` |
| minDate | 最小日期 | String | - |
| maxDate | 最大日期 | String | - |
| value | 默认选中日期 | String/Array | - |
| maxDays | 最多可选天数（区间选择时有效） | Number | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选择日期时触发 | `{ date }` |
| cancel | 取消时触发 | - |
