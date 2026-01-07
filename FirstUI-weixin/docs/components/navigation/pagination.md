# Pagination 分页器

分页器组件。

## 引入

```json
{
  "usingComponents": {
    "fui-pagination": "/components/firstui/fui-pagination/fui-pagination"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-pagination 
  current="{{1}}" 
  total="{{100}}"
  bind:change="onChange">
</fui-pagination>
```

### 自定义每页数量

```html
<fui-pagination 
  current="{{1}}" 
  total="{{100}}"
  pageSize="{{20}}">
</fui-pagination>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页码 | Number | `1` |
| total | 总条数 | Number | `0` |
| pageSize | 每页条数 | Number | `10` |
| type | 显示类型 | Number | `1` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 页码改变时触发 | `{ current }` |
