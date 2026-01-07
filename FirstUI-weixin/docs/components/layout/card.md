# Card 卡片

卡片容器组件。

## 引入

```json
{
  "usingComponents": {
    "fui-card": "/components/firstui/fui-card/fui-card"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-card title="卡片标题">
  <view>卡片内容</view>
</fui-card>
```

### 带缩略图

```html
<fui-card title="标题" thumbnail="/images/logo.png">
  <view>卡片内容</view>
</fui-card>
```

### 带页脚

```html
<fui-card title="标题" footer="页脚内容">
  <view>卡片内容</view>
</fui-card>
```

### 自定义样式

```html
<fui-card 
  title="标题" 
  background="#f5f5f5"
  margin="24rpx"
  radius="16rpx">
  <view>卡片内容</view>
</fui-card>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | String | - |
| thumbnail | 缩略图地址 | String | - |
| footer | 页脚内容 | String | - |
| footerLine | 是否显示页脚上方分割线 | Boolean | `true` |
| shadow | 是否显示阴影 | Boolean | `true` |
| background | 背景色 | String | `#fff` |
| margin | 外边距 | String | `0` |
| padding | 内边距 | String | `20rpx` |
| radius | 圆角 | String | `16rpx` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击卡片时触发 | `event` |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 卡片内容 |
| header | 自定义头部 |
| footer | 自定义页脚 |
