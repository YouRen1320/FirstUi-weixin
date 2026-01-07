# Waterfall 瀑布流

瀑布流布局组件。

## 引入

```json
{
  "usingComponents": {
    "fui-waterfall": "/components/firstui/fui-waterfall/fui-waterfall",
    "fui-waterfall-item": "/components/firstui/fui-waterfall-item/fui-waterfall-item"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-waterfall id="waterfall" bind:change="onChange">
  <fui-waterfall-item 
    wx:for="{{list}}" 
    wx:key="index"
    params="{{item}}">
    <image src="{{item.src}}" mode="widthFix"></image>
    <text>{{item.title}}</text>
  </fui-waterfall-item>
</fui-waterfall>
```

### 设置列数

```html
<fui-waterfall columns="3">
  <!-- items -->
</fui-waterfall>
```

## Waterfall Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 列数 | Number | `2` |
| gutter | 间距 | Number/String | `10` |
| insertStart | 是否在起始位置插入数据 | Boolean | `false` |

## WaterfallItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| params | item 数据 | Object | `{}` |
| imageHeight | 图片高度（已知时可直接设置） | Number/String | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 数据变化时触发 | - |
| click | 点击 item 时触发 | `{ item }` |
