# Radio 单选框

单选框组件，用于单项选择。

## 引入

```json
{
  "usingComponents": {
    "fui-radio": "/components/firstui/fui-radio/fui-radio",
    "fui-radio-group": "/components/firstui/fui-radio-group/fui-radio-group"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-radio-group bind:change="onChange">
  <fui-radio value="1">选项1</fui-radio>
  <fui-radio value="2">选项2</fui-radio>
</fui-radio-group>
```

### 默认选中

```html
<fui-radio-group value="2">
  <fui-radio value="1">选项1</fui-radio>
  <fui-radio value="2">选项2</fui-radio>
</fui-radio-group>
```

### 禁用状态

```html
<fui-radio value="1" disabled>禁用状态</fui-radio>
```

### 自定义颜色

```html
<fui-radio value="1" color="#8A2BE2" checked>自定义颜色</fui-radio>
```

## Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 单选框的值 | String/Number | - |
| checked | 是否选中 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| color | 选中时的颜色 | String | `#5B8FF9` |
| styleType | 选中后样式类型 | String | - |

## RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 | String/Number | - |

## RadioGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中项改变时触发 | `{ value }` |
