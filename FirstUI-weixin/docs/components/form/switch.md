# Switch 开关

开关选择器组件。

## 引入

```json
{
  "usingComponents": {
    "fui-switch": "/components/firstui/fui-switch/fui-switch"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-switch bind:change="onChange"></fui-switch>
```

### 默认选中

```html
<fui-switch checked></fui-switch>
```

### 禁用状态

```html
<fui-switch disabled></fui-switch>
<fui-switch disabled checked></fui-switch>
```

### 自定义颜色

```html
<fui-switch color="#8A2BE2" checked></fui-switch>
```

### 开关类型

```html
<fui-switch type="switch"></fui-switch>
<fui-switch type="checkbox"></fui-switch>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否选中 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| type | 开关类型，可选值为 `switch` `checkbox` | String | `switch` |
| color | 选中时的颜色 | String | `#5B8FF9` |
| bgColor | 背景颜色 | String | - |
| borderColor | 边框颜色 | String | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中状态改变时触发 | `{ checked }` |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 圆形按钮内显示内容（仅 type=switch 有效） |
