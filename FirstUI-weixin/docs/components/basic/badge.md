# Badge 徽章

徽章组件，用于展示数字或状态标记。

## 引入

```json
{
  "usingComponents": {
    "fui-badge": "/components/firstui/fui-badge/fui-badge"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-badge value="5"></fui-badge>
<fui-badge value="99"></fui-badge>
<fui-badge value="99+"></fui-badge>
```

### 最大值

通过 `max` 属性设置最大值，超过时显示 `{max}+`。

```html
<fui-badge value="200" max="99"></fui-badge>
```

### 小红点

通过 `dot` 属性设置为小红点模式。

```html
<fui-badge dot></fui-badge>
```

### 自定义颜色

通过 `background` 和 `color` 属性自定义颜色。

```html
<fui-badge value="NEW" background="#007aff" color="#fff"></fui-badge>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 徽章内容 | String/Number | - |
| max | 最大值，超过时显示 `{max}+` | Number | - |
| dot | 是否显示为小红点 | Boolean | `false` |
| background | 背景颜色 | String | `#ff0000` |
| color | 文字颜色 | String | `#fff` |
| size | 字体大小，单位 rpx | Number | `20` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击徽章时触发 | `event` |
