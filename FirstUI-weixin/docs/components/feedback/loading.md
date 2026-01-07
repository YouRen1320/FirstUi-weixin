# Loading 加载

加载提示组件。

## 引入

```json
{
  "usingComponents": {
    "fui-loading": "/components/firstui/fui-loading/fui-loading"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-loading show="{{loading}}"></fui-loading>
```

### 带文字

```html
<fui-loading show="{{loading}}" text="加载中..."></fui-loading>
```

### 自定义样式

```html
<fui-loading 
  show="{{loading}}"
  text="加载中..."
  background="rgba(0,0,0,0.6)"
  color="#fff">
</fui-loading>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示 | Boolean | `false` |
| text | 提示文字 | String | - |
| background | 遮罩背景色 | String | `rgba(0,0,0,0.4)` |
| color | 文字颜色 | String | `#fff` |
| zIndex | z-index | Number | `996` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | - |
