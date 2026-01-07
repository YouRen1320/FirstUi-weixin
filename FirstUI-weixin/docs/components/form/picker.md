# Picker 选择器

选择器组件，用于数据选择。

## 引入

```json
{
  "usingComponents": {
    "fui-picker": "/components/firstui/fui-picker/fui-picker"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-picker 
  options="{{options}}" 
  show="{{show}}" 
  bind:change="onChange"
  bind:cancel="onCancel">
</fui-picker>
```

```js
Page({
  data: {
    show: false,
    options: [
      { text: '选项1', value: 1 },
      { text: '选项2', value: 2 },
      { text: '选项3', value: 3 }
    ]
  }
})
```

### 多列选择

```html
<fui-picker 
  options="{{multiOptions}}" 
  show="{{show}}">
</fui-picker>
```

```js
Page({
  data: {
    multiOptions: [
      [{ text: '2023', value: '2023' }, { text: '2024', value: '2024' }],
      [{ text: '01', value: '01' }, { text: '02', value: '02' }]
    ]
  }
})
```

### 联动选择

设置 `linkage` 为 `true` 开启联动。

```html
<fui-picker 
  options="{{cascadeOptions}}" 
  linkage
  show="{{show}}">
</fui-picker>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示 | Boolean | `false` |
| options | 选项数据 | Array | `[]` |
| value | 默认选中值 | Array | `[]` |
| linkage | 是否联动 | Boolean | `false` |
| title | 标题 | String | - |
| isClose | 点击确认后是否自动关闭 | Boolean | `true` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选择改变时触发 | `{ value, index, item }` |
| cancel | 取消时触发 | - |
