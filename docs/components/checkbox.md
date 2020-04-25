---
title: Checkbox 选项框
---

# Checkbox 选项

<ClientOnly>
<checkbox-demo-1></checkbox-demo-1>
</ClientOnly>

::: details 查看代码

```html
<Checkbox-groud :checkList.sync="checkList" checkAll>
  <Checkbox label="复选框 A"></Checkbox>
  <Checkbox label="复选框 b"></Checkbox>
  <Checkbox label="复选框 c"></Checkbox>
</Checkbox-groud>

<script>
  export default {
    data() {
      return {
        checkList: [],
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
