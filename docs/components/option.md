---
title: Option 单选框
---

# Option 单选框

<ClientOnly>
<option-demo-1></option-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-options :default.sync="name">
  <g-redio :name="1">内容1</g-redio>
  <g-redio :name="2">内容2</g-redio>
</g-options>
<script>
  export default {
    data() {
      return {
        name: 1,
      }
    },
  }
</script>
```

:::

# Attributes

| 参数 |    说明     |   类型 | 可选值 | 默认 |
| ---- | :---------: | -----: | -----: | ---: |
| name | icon 图标名 | String |     -- |   -- |
