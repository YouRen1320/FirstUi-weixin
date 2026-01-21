# VTabs 纵向选项卡

纵向选项卡组件，支持左右联动。

## 基础使用

```html
<fui-vtabs vtabs="{{vtabs}}" bindchange="onChange">
  <fui-vtabs-content tabIndex="{{index}}" wx:for="{{vtabs}}" wx:key="index">
    <view class="content">内容...</view>
  </fui-vtabs-content>
</fui-vtabs>
```

## 不联动

```html
<fui-vtabs vtabs="{{vtabs}}" linkage="{{false}}" bindclick="onClick"></fui-vtabs>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| vtabs | 选项卡数据 | array | [] | string[] / object[] |
| width | 总宽度 | string/number | 0 (100%) | - |
| height | 总高度 | string/number | 0 (100%) | - |
| tabWidth | 左侧标签栏宽度 | string/number | 220 | - |
| tabHeight | 左侧标签栏item高度 | string/number | 110 | - |
| size | 字体大小 | number | 26 | - |
| activeSize | 选中字体大小 | number | 26 | - |
| color | 字体颜色 | string | #333333 | - |
| activeColor | 选中字体颜色 | string | - | - |
| background | 标签栏背景色 | string | #eeeeee | - |
| activeBgColor | 选中背景色 | string | #ffffff | - |
| isBorder | 是否显示边框 | boolean | true | - |
| activeTab | 当前选中索引 | number | 0 | - |
| animation | 是否开启切换动画 | boolean | true | - |
| linkage | 是否左右联动 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击左侧标签触发 (linkage=false) | `{ index, ...item }` |
| change | 切换标签触发 | `{ index, ...item }` |
