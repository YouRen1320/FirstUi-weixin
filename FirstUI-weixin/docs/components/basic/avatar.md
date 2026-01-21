# Avatar 头像

Avatar 头像，用图标、图片或者字符的形式展示用户或事物信息。

## 基础使用

```html
<!-- 字符头像 -->
<fui-avatar size="small" text="A"></fui-avatar>
<fui-avatar text="B"></fui-avatar>
<fui-avatar size="large" text="丁"></fui-avatar>

<!-- 自定义背景 -->
<fui-avatar text="刘" background="#FFB703"></fui-avatar>
```

## 形状与圆角

```html
<!-- 方形 -->
<fui-avatar size="small" text="A" shape="square"></fui-avatar>
<!-- 自定义圆角 -->
<fui-avatar size="large" text="丁" radius="30"></fui-avatar>
```

## 使用图片

```html
<fui-avatar src="/static/images/common/img_logo.png"></fui-avatar>
<fui-avatar size="large" src="/static/images/common/img_logo.png" shape="square"></fui-avatar>
```

## 自定义插槽

```html
<fui-avatar>
  <fui-icon name="my-fill" color="#fff"></fui-icon>
</fui-avatar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| src | 图片地址 | string | - | - |
| errorSrc | 图片加载失败时显示的默认图片地址 | string | - | - |
| mode | 图片裁剪、缩放的模式 | string | scaleToFill | - |
| lazyLoad | 是否开启图片懒加载 | boolean | true | - |
| webp | 默认不解析 webP 格式，只支持网络资源 | boolean | false | - |
| background | 背景色 | string | #D1D1D1 | - |
| size | 头像大小 | string | middle | small (64rpx), middle (96rpx), large (128rpx) |
| width | 自定义宽度，单位 rpx，设置大于0的数值生效，优先级高于 size | string/number | 0 | - |
| height | 自定义高度，单位 rpx，设置大于0的数值生效 | string/number | 0 | - |
| shape | 头像形状 | string | circle | circle, square |
| radius | 图片圆角值，默认使用 shape，当设置大于等于 0 的数值，shape 失效 | string/number | -1 | - |
| text | 没有 src 时显示的文本 | string | - | - |
| color | 文本颜色 | string | #fff | - |
| fontSize | 字体大小，默认使用 size 下的字体大小 | string/number | 0 | - |
| fontWeight | 字重 | string/number | 600 | - |
| marginRight | margin-right 值 | string/number | 0 | - |
| marginBottom | margin-bottom 值 | string/number | 0 | - |
| block | 是否显示为块级元素 | boolean | false | - |
| index | 列表中的索引值 | number | 0 | - |
| params | 点击事件携带的其他参数 | string/number | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击头像时触发 | `{ index: number, params: string/number }` |
| error | 图片加载失败时触发 | `{ index: number, params: string/number }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义头像内容（如 Icon） |
