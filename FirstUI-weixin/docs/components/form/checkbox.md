# Checkbox 复选框

复选框组件，用于多项选择。

## 引入

```json
{
  "usingComponents": {
    "fui-checkbox": "/components/firstui/fui-checkbox/fui-checkbox",
    "fui-checkbox-group": "/components/firstui/fui-checkbox-group/fui-checkbox-group"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-checkbox value="1" checked>选项1</fui-checkbox>
<fui-checkbox value="2">选项2</fui-checkbox>
```

### 复选框组

```html
<fui-checkbox-group bind:change="onChange">
  <fui-checkbox value="1">苹果</fui-checkbox>
  <fui-checkbox value="2">香蕉</fui-checkbox>
  <fui-checkbox value="3">橘子</fui-checkbox>
</fui-checkbox-group>
```

### 禁用状态

```html
<fui-checkbox value="1" disabled>禁用状态</fui-checkbox>
<fui-checkbox value="2" disabled checked>禁用选中</fui-checkbox>
```

### 自定义颜色

```html
<fui-checkbox value="1" color="#8A2BE2" checked>自定义颜色</fui-checkbox>
```

## Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 复选框的值 | String/Number | - |
| checked | 是否选中 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| color | 选中时的颜色 | String | `#5B8FF9` |
| borderColor | 边框颜色 | String | - |

## Checkbox Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中状态改变时触发 | `{ checked, value }` |

## CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中项改变时触发 | `{ value: Array }` |
