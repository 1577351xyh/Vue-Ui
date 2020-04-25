---
title: collapse 下拉菜单
---

# 展开

<ClientOnly>
  <collapse-demo-1></collapse-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-collapse :selected.sync="selected">
  <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
  <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
  <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>

<script>
  export default {
    data() {
      return {
        selected: ['1'],
      }
    },
  }
</script>
```

:::
<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

::: details 查看代码

```html
<g-collapse :selected.sync="selected" single>
  <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
  <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
  <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>

<script>
  export default {
    data() {
      return {
        selected: ['1'],
      }
    },
  }
</script>
```

:::

# Attributes

将内容区域折叠/展开。

| 参数     |             说明             |    类型 |     可选值 | 默认 |
| -------- | :--------------------------: | ------: | ---------: | ---: |
| selected | 默认第一个展示的 slides,必填 |  String |         -- |   -- |
| autoplay |           自动轮播           | Boolean | true,false | 3000 |
