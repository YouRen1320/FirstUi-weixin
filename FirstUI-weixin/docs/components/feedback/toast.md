# Toast 轻提示

轻提示组件。

## 引入

```json
{
  "usingComponents": {
    "fui-toast": "/components/firstui/fui-toast/fui-toast"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-toast id="fui-toast"></fui-toast>
```

```js
Page({
  showToast() {
    this.selectComponent('#fui-toast').show({
      title: '提示信息'
    })
  }
})
```

### 不同类型

```js
// 成功提示
this.selectComponent('#fui-toast').show({
  title: '操作成功',
  type: 'success'
})

// 失败提示
this.selectComponent('#fui-toast').show({
  title: '操作失败',
  type: 'fail'
})

// 加载提示
this.selectComponent('#fui-toast').show({
  title: '加载中...',
  type: 'loading'
})
```

### 自定义图标

```js
this.selectComponent('#fui-toast').show({
  title: '自定义图标',
  icon: 'checkbox'
})
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| zIndex | z-index | Number | `1001` |
| duration | 显示时长（毫秒） | Number | `2000` |

## Methods

### show(options)

显示提示。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 提示文字 | String | - |
| type | 类型 `success` `fail` `loading` | String | - |
| icon | 自定义图标 | String | - |
| duration | 显示时长 | Number | `2000` |
