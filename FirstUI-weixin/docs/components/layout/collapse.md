# Collapse 折叠面板

折叠面板组件。

## 引入

```json
{
  "usingComponents": {
    "fui-collapse": "/components/firstui/fui-collapse/fui-collapse",
    "fui-collapse-item": "/components/firstui/fui-collapse-item/fui-collapse-item"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-collapse>
  <fui-collapse-item title="标题1">
    内容1
  </fui-collapse-item>
  <fui-collapse-item title="标题2">
    内容2
  </fui-collapse-item>
</fui-collapse>
```

### 手风琴模式

```html
<fui-collapse accordion>
  <fui-collapse-item title="标题1">内容1</fui-collapse-item>
  <fui-collapse-item title="标题2">内容2</fui-collapse-item>
</fui-collapse>
```

### 默认展开

```html
<fui-collapse-item title="默认展开" open>
  内容
</fui-collapse-item>
```

## Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| accordion | 是否手风琴模式 | Boolean | `false` |

## CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | String | - |
| open | 是否展开 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| animation | 是否开启动画 | Boolean | `true` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 展开/收起时触发 | `{ open }` |
