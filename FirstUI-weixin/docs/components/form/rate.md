# Rate 评分

评分组件，支持半星、自定义颜色与大小。

## 基础使用

```html
<fui-rate bindchange="change"></fui-rate>
```

## 自定义展示

```html
<!-- 自定义颜色与大小 -->
<fui-rate color="#888" activeColor="#465CFF" size="{{48}}"></fui-rate>

<!-- 设置最大分与默认分 -->
<fui-rate max="{{8}}" score="{{5}}"></fui-rate>
```

## 支持半星与禁用

```html
<fui-rate allowHalf></fui-rate>
<fui-rate disabled score="{{3.5}}"></fui-rate>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| max | 最大评分数 | number | 5 | - |
| score | 当前评分 | number | 0 | - |
| color | 未选中颜色 | string | #CCCCCC | - |
| activeColor | 选中颜色 | string | #FFB703 | - |
| disabled | 是否禁用 | boolean | false | - |
| size | 星星大小，单位 rpx | number | 56 | - |
| spacing | 星星间距，单位 rpx | number | 0 | - |
| allowHalf | 是否支持半星 | boolean | false | - |
| touchable | 是否支持滑动评分 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 评分变化时触发 | `{ score, param }` |
