# Tabs 标签页

标签页组件，用于内容分类切换。

## 引入

```json
{
  "usingComponents": {
    "fui-tabs": "/components/firstui/fui-tabs/fui-tabs"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-tabs tabs="{{tabs}}" bind:change="onChange"></fui-tabs>
```

```js
Page({
  data: {
    tabs: [
      { name: '标签1' },
      { name: '标签2' },
      { name: '标签3' }
    ]
  }
})
```

### 默认选中

```html
<fui-tabs tabs="{{tabs}}" current="{{1}}"></fui-tabs>
```

### 滑块居中

```html
<fui-tabs tabs="{{tabs}}" center></fui-tabs>
```

### 自定义样式

```html
<fui-tabs 
  tabs="{{tabs}}"
  activeColor="#5B8FF9"
  sliderBackground="#5B8FF9">
</fui-tabs>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tabs | 标签数据 | Array | `[]` |
| current | 当前选中索引 | Number | `0` |
| nameKey | 标签名 key | String | `name` |
| scroll | 是否可滚动 | Boolean | `false` |
| center | 滑块是否居中 | Boolean | `false` |
| activeColor | 选中态颜色 | String | - |
| sliderBackground | 滑块背景色 | String | - |
| itemPadding | item 项左右间距 | String | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换标签时触发 | `{ index, item }` |
