# Panel 面板

面板组件，用于展示信息列表。

## 引入

```json
{
  "usingComponents": {
    "fui-panel": "/components/firstui/fui-panel/fui-panel"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-panel 
  title="面板标题" 
  list="{{panelList}}">
</fui-panel>
```

```js
Page({
  data: {
    panelList: [
      { src: '/images/icon1.png', text: '选项1' },
      { src: '/images/icon2.png', text: '选项2' },
      { src: '/images/icon3.png', text: '选项3' }
    ]
  }
})
```

### 图片和内容位置对调

```html
<fui-panel 
  title="标题" 
  list="{{panelList}}"
  rowReverse>
</fui-panel>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 面板标题 | String | - |
| list | 面板数据列表 | Array | `[]` |
| srcKey | 图片地址 key | String | `src` |
| textKey | 文本内容 key | String | `text` |
| rowReverse | 图片与内容是否对换位置 | Boolean | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击面板项时触发 | `{ index, item }` |
