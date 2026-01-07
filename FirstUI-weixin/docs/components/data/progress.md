# Progress 进度条

进度条组件。

## 引入

```json
{
  "usingComponents": {
    "fui-progress": "/components/firstui/fui-progress/fui-progress"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-progress percent="{{30}}"></fui-progress>
<fui-progress percent="{{50}}"></fui-progress>
<fui-progress percent="{{70}}"></fui-progress>
```

### 自定义颜色

```html
<fui-progress percent="{{60}}" activeColor="#5B8FF9"></fui-progress>
```

### 显示百分比

```html
<fui-progress percent="{{60}}" showInfo></fui-progress>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 进度百分比 | Number | `0` |
| activeColor | 进度条颜色 | String | `#5B8FF9` |
| backgroundColor | 背景颜色 | String | `#e5e5e5` |
| showInfo | 是否显示百分比 | Boolean | `false` |
| height | 进度条高度 | String | `6rpx` |
| radius | 圆角 | String | `3rpx` |
