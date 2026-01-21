# BottomPopup 底部弹出层

从底部弹出的浮层，用于展示额外的内容或操作。

## 引入

```json
{
  "usingComponents": {
    "fui-bottom-popup": "/components/firstui/fui-bottom-popup/fui-bottom-popup"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-button text="打开弹出层" bind:click="openPopup"></fui-button>

<fui-bottom-popup show="{{show}}" bind:close="closePopup">
  <view class="popup-content">弹出层内容</view>
</fui-bottom-popup>
```

```js
Page({
  data: {
    show: false
  },
  openPopup() {
    this.setData({ show: true })
  },
  closePopup() {
    this.setData({ show: false })
  }
})
```

### 自定义圆角

```html
<fui-bottom-popup show="{{show}}" radius="32" bind:close="closePopup">
  <view class="popup-content">带圆角的弹出层</view>
</fui-bottom-popup>
```

### 禁止点击遮罩关闭

```html
<fui-bottom-popup 
  show="{{show}}" 
  maskClosable="{{false}}" 
  bind:close="closePopup"
>
  <view class="popup-content">
    <text>只能通过按钮关闭</text>
    <fui-button text="关闭" bind:click="closePopup"></fui-button>
  </view>
</fui-bottom-popup>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示弹出层 | Boolean | `false` |
| background | 弹出层背景颜色 | String | `#fff` |
| radius | 弹出层圆角，单位 rpx | Number/String | `24` |
| zIndex | z-index 层级 | Number/String | `1001` |
| maskClosable | 点击遮罩是否可关闭 | Boolean | `true` |
| maskBackground | 遮罩背景颜色 | String | `rgba(0,0,0,.6)` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭弹出层时触发 | - |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 弹出层内容 |
