# List 列表

列表组件。

## 引入

```json
{
  "usingComponents": {
    "fui-list": "/components/firstui/fui-list/fui-list",
    "fui-list-cell": "/components/firstui/fui-list-cell/fui-list-cell"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-list title="基础列表">
  <fui-list-cell>列表项1</fui-list-cell>
  <fui-list-cell>列表项2</fui-list-cell>
  <fui-list-cell>列表项3</fui-list-cell>
</fui-list>
```

### 带箭头

```html
<fui-list>
  <fui-list-cell arrow>带箭头</fui-list-cell>
</fui-list>
```

### 带图标

```html
<fui-list>
  <fui-list-cell>
    <fui-icon slot="left" name="setting"></fui-icon>
    <text>设置</text>
  </fui-list-cell>
</fui-list>
```

## List Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 列表标题 | String | - |
| padding | 内边距 | String | - |

## ListCell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| arrow | 是否显示箭头 | Boolean | `false` |
| arrowColor | 箭头颜色 | String | `#B2B2B2` |
| bottomBorder | 是否显示底部边框 | Boolean | `true` |
| topBorder | 是否显示顶部边框 | Boolean | `false` |
| padding | 内边距 | String | `24rpx 32rpx` |

## ListCell Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | `event` |

## ListCell Slots

| 名称 | 说明 |
| --- | --- |
| default | 列表项内容 |
| left | 左侧内容 |
| right | 右侧内容 |
