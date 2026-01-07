# Avatar 头像

头像组件，用于展示用户头像或图片。

## 引入

```json
{
  "usingComponents": {
    "fui-avatar": "/components/firstui/fui-avatar/fui-avatar"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-avatar src="https://example.com/avatar.jpg"></fui-avatar>
```

### 头像尺寸

通过 `size` 属性设置头像尺寸。

```html
<fui-avatar src="..." size="small"></fui-avatar>
<fui-avatar src="..." size="medium"></fui-avatar>
<fui-avatar src="..." size="large"></fui-avatar>
```

### 头像形状

通过 `shape` 属性设置头像形状。

```html
<fui-avatar src="..." shape="circle"></fui-avatar>
<fui-avatar src="..." shape="square"></fui-avatar>
```

### 默认头像

加载失败时显示默认头像。

```html
<fui-avatar src="" errorSrc="/images/default-avatar.png"></fui-avatar>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 头像图片地址 | String | - |
| size | 头像尺寸，可选值为 `small` `medium` `large` 或具体数值 | String/Number | `medium` |
| shape | 头像形状，可选值为 `circle` `square` | String | `circle` |
| errorSrc | 加载失败时的默认图片 | String | - |
| block | 是否为块级元素 | Boolean | `false` |
| mode | 图片裁剪、缩放模式 | String | `aspectFill` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击头像时触发 | `event` |
| error | 图片加载失败时触发 | `event` |
