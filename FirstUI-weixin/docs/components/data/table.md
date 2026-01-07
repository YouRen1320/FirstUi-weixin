# Table 表格

表格组件，用于展示数据。

## 引入

```json
{
  "usingComponents": {
    "fui-table": "/components/firstui/fui-table/fui-table"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-table 
  header="{{header}}" 
  data="{{tableData}}">
</fui-table>
```

```js
Page({
  data: {
    header: [
      { text: '姓名', key: 'name', width: 100 },
      { text: '年龄', key: 'age', width: 80 },
      { text: '地址', key: 'address' }
    ],
    tableData: [
      { name: '张三', age: 28, address: '北京市' },
      { name: '李四', age: 32, address: '上海市' }
    ]
  }
})
```

### 固定高度

```html
<fui-table 
  header="{{header}}" 
  data="{{tableData}}"
  height="400rpx">
</fui-table>
```

### 多选

```html
<fui-table 
  header="{{header}}" 
  data="{{tableData}}"
  multiple
  bind:select="onSelect">
</fui-table>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| header | 表头数据 | Array | `[]` |
| data | 表格数据 | Array | `[]` |
| height | 固定高度 | String/Number | - |
| stripe | 是否斑马纹 | Boolean | `false` |
| border | 是否显示边框 | Boolean | `true` |
| multiple | 是否多选 | Boolean | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击单元格时触发 | `{ row, column }` |
| select | 选择行时触发 | `{ selectedRows }` |
| scrolltolower | 滚动到底部时触发 | - |
