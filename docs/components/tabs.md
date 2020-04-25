---
title: Tabs 标签页
---

# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

<ClientOnly>
  <tabs-demo-1></tabs-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-tabs :selected="selected">
  <g-tabs-head>
    <g-tabs-item name="1">1</g-tabs-item>
    <g-tabs-item name="2">2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">content 1</g-tabs-pane>
    <g-tabs-pane name="2">content 2</g-tabs-pane>
  </g-tabs-body>
</g-tabs>

<script>
  export default {
    data() {
      return {
        selected: '1'
      }
    },
  }
</script>
```

:::

# Attributes

selected:当前选中的 name 值

g-button-group 的子元素必须是 g-button,否则会报错;

| 参数     |       说明        |   类型 | 可选值 | 默认 |
| -------- | :---------------: | -----: | -----: | ---: |
| selected | 当前选中的标签名  | String |     -- |   -- |
| name     | 组件唯一标识,必填 | String |     -- |   -- |
