# Tag 标签

标签组件，用于标记或分类。

## 基础使用

```html
<fui-tag text="标签一"></fui-tag>
<fui-tag text="标签二" type="danger"></fui-tag>
<fui-tag text="标签三" type="success"></fui-tag>
<fui-tag text="标签四" type="warning"></fui-tag>
<fui-tag text="标签五" type="purple"></fui-tag>
```

## 主题风格

```html
<!-- 浅色调 -->
<fui-tag text="标签一" theme="light"></fui-tag>
<!-- 空心 -->
<fui-tag text="标签一" theme="plain"></fui-tag>
```

## 带关闭按钮

```html
<fui-tag text="标签一" theme="light" padding="12rpx 20rpx">
  <view class="fui-close__icon">
    <fui-icon name="close" color="#465CFF" size="{{32}}"></fui-icon>
  </view>
</fui-tag>
```

## 自定义颜色与大小

```html
<fui-tag text="标签一" background="rgba(255, 43, 43, .05)" color="#333"></fui-tag>
<fui-tag text="标签三" scaleRatio="{{0.8}}"></fui-tag>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 标签内容 | string | - | - |
| type | 样式类型 | string | primary | success, warning, danger, purple |
| theme | 主题风格 | string | dark | light, plain |
| background | 背景色，如果设置背景则 type 失效 | string | - | - |
| isBorder | 是否显示边框 | boolean | true | - |
| borderColor | 边框颜色 | string | - | - |
| color | 字体颜色 | string | - | - |
| size | 字体大小，单位 rpx | string/number | 24 | - |
| scaleRatio | 缩放比例 | number | 1 | - |
| highlight | 是否有点击效果 | boolean | false | - |
| radius | 圆角值 | string/number | 8 | - |
| padding | 内边距 | string | 16rpx 32rpx | - |
| margin | 外边距 | string | 0 | - |
| index | 索引值，点击事件回调中返回 | number | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签时触发 | `{ index: number }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 标签内部内容，可用于放置关闭按钮等 |
