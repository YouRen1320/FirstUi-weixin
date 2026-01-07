# Divider 分割线

分割线组件。

## 引入

```json
{
  "usingComponents": {
    "fui-divider": "/components/firstui/fui-divider/fui-divider"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-divider></fui-divider>
```

### 带文字

```html
<fui-divider text="分割线"></fui-divider>
```

### 自定义样式

```html
<fui-divider 
  dividerColor="#5B8FF9" 
  color="#5B8FF9"
  text="自定义颜色">
</fui-divider>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 分割线文字 | String | - |
| color | 文字颜色 | String | `#999` |
| dividerColor | 分割线颜色 | String | `#e5e5e5` |
| height | 分割线高度 | String | `1px` |
| margin | 分割线 margin | String | `24rpx 0` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | `event` |
