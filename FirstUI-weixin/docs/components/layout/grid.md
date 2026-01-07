# Grid 宫格

宫格布局组件。

## 引入

```json
{
  "usingComponents": {
    "fui-grid": "/components/firstui/fui-grid/fui-grid",
    "fui-grid-item": "/components/firstui/fui-grid-item/fui-grid-item"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-grid>
  <fui-grid-item>
    <fui-icon name="home"></fui-icon>
    <text>首页</text>
  </fui-grid-item>
  <fui-grid-item>
    <fui-icon name="category"></fui-icon>
    <text>分类</text>
  </fui-grid-item>
  <fui-grid-item>
    <fui-icon name="cart"></fui-icon>
    <text>购物车</text>
  </fui-grid-item>
  <fui-grid-item>
    <fui-icon name="my"></fui-icon>
    <text>我的</text>
  </fui-grid-item>
</fui-grid>
```

### 自定义列数

```html
<fui-grid columns="3">
  <!-- grid items -->
</fui-grid>
```

### 无边框

```html
<fui-grid border="{{false}}">
  <!-- grid items -->
</fui-grid>
```

## Grid Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 列数 | Number | `4` |
| border | 是否显示边框 | Boolean | `true` |
| square | 是否正方形 | Boolean | `false` |

## Grid Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击宫格时触发 | `{ index }` |

## GridItem Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击宫格项时触发 | `event` |
