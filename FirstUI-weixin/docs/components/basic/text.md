# Text 文本

文本组件，用于展示文本内容。

## 引入

```json
{
  "usingComponents": {
    "fui-text": "/components/firstui/fui-text/fui-text"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-text text="这是一段文本"></fui-text>
```

### 文本类型

通过 `type` 属性设置文本类型。

```html
<fui-text text="主要文本" type="primary"></fui-text>
<fui-text text="成功文本" type="success"></fui-text>
<fui-text text="警告文本" type="warning"></fui-text>
<fui-text text="危险文本" type="danger"></fui-text>
```

### 文本大小

通过 `size` 属性设置文本大小。

```html
<fui-text text="小号文本" size="24"></fui-text>
<fui-text text="默认文本" size="28"></fui-text>
<fui-text text="大号文本" size="32"></fui-text>
```

### 加粗文本

通过 `fontWeight` 属性设置文本粗细。

```html
<fui-text text="加粗文本" fontWeight="bold"></fui-text>
```

### 文本颜色

通过 `color` 属性自定义文本颜色。

```html
<fui-text text="自定义颜色" color="#8A2BE2"></fui-text>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文本内容 | String | - |
| type | 文本类型，可选值为 `primary` `success` `warning` `danger` | String | - |
| size | 字体大小，单位 rpx | Number/String | `28` |
| color | 文本颜色 | String | - |
| fontWeight | 字体粗细 | String/Number | `normal` |
| block | 是否为块级元素 | Boolean | `false` |
| unShrink | flex 布局下取消收缩 | Boolean | `false` |
| align | 文本对齐方式 | String | `left` |
| decoration | 文本装饰 | String | `none` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击文本时触发 | `event` |
