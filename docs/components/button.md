---
title: buttom 按钮
---

# 按钮

<ClientOnly>
  <button-demo-1></button-demo-1>
  <button-demo-2></button-demo-2>
</ClientOnly>

# Attributes

组件将被渲染为 button 标签，因此你可以使用所有的 button 原生属性。

g-button-group的子元素必须是g-button,否则会报错;

| 参数         |         说明          |    类型 |     可选值 | 默认 |
| ------------ | :-------------------: | ------: | ---------: | ---: |
| icon         |      icon 图标名      |  String |         -- |   -- |
| iconPosition |       icon 位置       |  String | left,right |   -- |
| loading      | 带 loading 效果的按钮 | Boolean |         -- |   -- |
