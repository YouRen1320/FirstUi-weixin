# Textarea 多行输入框

多行文本输入框组件。

## 引入

```json
{
  "usingComponents": {
    "fui-textarea": "/components/firstui/fui-textarea/fui-textarea"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-textarea placeholder="请输入内容" bind:input="onInput"></fui-textarea>
```

### 显示字数统计

```html
<fui-textarea maxlength="200" count></fui-textarea>
```

### 自动增高

```html
<fui-textarea autoHeight></fui-textarea>
```

### 禁用状态

```html
<fui-textarea disabled value="禁用状态"></fui-textarea>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框的值 | String | - |
| placeholder | 占位提示文字 | String | - |
| disabled | 是否禁用 | Boolean | `false` |
| maxlength | 最大输入长度，-1 为不限制 | Number | `-1` |
| count | 是否显示字数统计 | Boolean | `false` |
| autoHeight | 是否自动增高 | Boolean | `false` |
| height | 高度 | String | `200rpx` |
| radius | 圆角大小 | String | - |
| textareaBorder | 是否显示边框 | Boolean | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 输入时触发 | `{ value }` |
| focus | 聚焦时触发 | `event` |
| blur | 失焦时触发 | `event` |
| confirm | 点击完成按钮时触发 | `{ value }` |
