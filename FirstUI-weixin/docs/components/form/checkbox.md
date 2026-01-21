# Checkbox 复选框

复选框组件，用于多项选择。

## 基础使用

```html
<fui-checkbox-group name="checkbox" model:value="{{vals}}" bindchange="change">
  <fui-label>
    <view class="fui-align__center">
      <fui-checkbox value="1"></fui-checkbox>
      <text class="fui-text">选中</text>
    </view>
  </fui-label>
  <fui-label>
    <view class="fui-align__center">
      <fui-checkbox value="2"></fui-checkbox>
      <text class="fui-text">未选中</text>
    </view>
  </fui-label>
</fui-checkbox-group>
```

## 列表布局

```html
<fui-checkbox-group>
  <fui-label wx:for="{{items}}" wx:key="index">
    <fui-list-cell>
      <view class="fui-align__center">
        <fui-checkbox checked="{{item.checked}}" value="{{item.value}}" color="#FFB703"></fui-checkbox>
        <text class="fui-text">{{item.name}}</text>
      </view>
    </fui-list-cell>
  </fui-label>
</fui-checkbox-group>
```

## 仅显示对号

```html
<fui-checkbox isCheckMark checkMarkColor="#FF2B2B" scaleRatio="{{1.3}}" value="1"></fui-checkbox>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 选项值 | string/number | - | - |
| checked | 是否选中 | boolean | false | - |
| disabled | 是否禁用 | boolean | false | - |
| color | 选中背景颜色 | string | - | - |
| borderColor | 未选中时边框颜色 | string | #ccc | - |
| borderRadius | 圆角值 | string | 50% | - |
| isCheckMark | 是否只展示对号，无边框背景 | boolean | false | - |
| checkMarkColor | 对号颜色 | string | #fff | - |
| scaleRatio | 缩放比例 | number/string | 1 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中状态变化时触发 | `{ checked: boolean, value: any }` |
