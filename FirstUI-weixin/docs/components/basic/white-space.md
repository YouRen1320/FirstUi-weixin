# WhiteSpace 上下间距

布局组件，主要用于设置内容之间上下间距。

## 基础使用

```html
<!-- size = small (8rpx) -->
<fui-white-space size="small"></fui-white-space>

<!-- size = default (16rpx) -->
<fui-white-space size="default"></fui-white-space>

<!-- size = large (24rpx) -->
<fui-white-space size="large"></fui-white-space>
```

## 自定义高度

```html
<!-- 高度 10rpx -->
<fui-white-space height="10"></fui-white-space>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| size | 间距大小 | string | default | small (8rpx), default (16rpx), large (24rpx) |
| height | 自定义高度，单位 rpx，设置大于 0 的数值生效，优先级高于 size | string/number | 0 | - |
| background | 背景颜色 | string | transparent | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | - |
