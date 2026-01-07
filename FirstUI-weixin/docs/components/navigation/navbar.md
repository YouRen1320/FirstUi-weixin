# NavBar 导航栏

顶部导航栏组件。

## 引入

```json
{
  "usingComponents": {
    "fui-nav-bar": "/components/firstui/fui-nav-bar/fui-nav-bar"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-nav-bar title="页面标题"></fui-nav-bar>
```

### 带返回按钮

```html
<fui-nav-bar 
  title="页面标题" 
  isBack 
  bind:back="onBack">
</fui-nav-bar>
```

### 固定顶部

```html
<fui-nav-bar title="固定顶部" isFixed></fui-nav-bar>
```

### 自定义样式

```html
<fui-nav-bar 
  title="自定义样式"
  background="linear-gradient(90deg, #5B8FF9, #61DDAA)"
  color="#fff">
</fui-nav-bar>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | String | - |
| isBack | 是否显示返回按钮 | Boolean | `false` |
| isFixed | 是否固定在顶部 | Boolean | `false` |
| isImmersive | 是否沉浸式 | Boolean | `true` |
| background | 背景色 | String | `#fff` |
| color | 文字颜色 | String | `#333` |
| splitLine | 是否显示底部分割线 | Boolean | `false` |
| placeholder | 固定时是否占位 | Boolean | `true` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| back | 点击返回按钮时触发 | - |
| click | 点击标题时触发 | - |

## Slots

| 名称 | 说明 |
| --- | --- |
| left | 左侧内容 |
| right | 右侧内容 |
