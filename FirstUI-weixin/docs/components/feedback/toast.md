# Toast 轻提示

轻量级反馈/提示，支持自定义内容。

## 基础使用

```html
<fui-toast id="toast"></fui-toast>

<!-- JS 调用 -->
<!-- this.selectComponent('#toast').show({ text: '操作成功' }) -->
```

## 自定义图标

```html
<fui-toast id="toast"></fui-toast>

<!-- JS 调用 -->
<!-- this.selectComponent('#toast').show({ text: '成功', src: '/static/success.png' }) -->
```

## 自定义内容

```html
<fui-toast id="toast">
  <view class="custom-toast">
    <fui-icon name="checkbox" color="#fff"></fui-icon>
    <text>自定义提示</text>
  </view>
</fui-toast>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| padding | padding值 | string | 32rpx | - |
| background | 背景颜色 | string | rgba(0,0,0,.6) | - |
| width | 宽度 | number | 64 | - |
| size | 字体大小 | number | 30 | - |
| color | 字体颜色 | string | #fff | - |
| zIndex | 层级 | number | 1001 | - |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| show | 显示提示 | `options: { text, src, duration }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义提示内容 |
