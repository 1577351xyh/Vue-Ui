---
title: Layout 布局
---

# Layout 布局

<ClientOnly>
  <layout-demo-1></layout-demo-1>
  <layout-demo-2></layout-demo-2>
  <layout-demo-3></layout-demo-3>
</ClientOnly>

# Attributes

组件将被渲染为 button 标签，因此你可以使用所有的 button 原生属性。

g-button-group 的子元素必须是 g-button,否则会报错;

| 参数        |       说明       |    类型 |     可选值 | 默认 |
| ----------- | :--------------: | ------: | ---------: | ---: |
| closeButton | 是否显示关闭按钮 | Boolean | true,false |   -- |
