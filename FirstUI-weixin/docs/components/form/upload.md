# Upload 图片上传

图片上传组件。

## 引入

```json
{
  "usingComponents": {
    "fui-upload": "/components/firstui/fui-upload/fui-upload"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-upload 
  fileList="{{fileList}}" 
  bind:success="onSuccess"
  bind:fail="onFail">
</fui-upload>
```

### 限制数量

```html
<fui-upload max="3"></fui-upload>
```

### 自定义上传

```html
<fui-upload 
  immediately="{{false}}"
  bind:select="onSelect">
  <view slot="default">点击上传</view>
</fui-upload>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fileList | 已上传的文件列表 | Array | `[]` |
| url | 上传地址 | String | - |
| max | 最大上传数量 | Number | `9` |
| immediately | 选择后是否立即上传 | Boolean | `true` |
| size | 限制文件大小（M） | Number | `10` |
| sizeType | 图片尺寸类型 | Array | `['original', 'compressed']` |
| sourceType | 图片来源类型 | Array | `['album', 'camera']` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| success | 上传成功时触发 | `{ file, fileList }` |
| fail | 上传失败时触发 | `{ error }` |
| select | 选择图片时触发 | `{ files }` |
| delete | 删除图片时触发 | `{ index, file }` |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义上传图标 |
