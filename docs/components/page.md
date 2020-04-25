---
title: page 分页器
---

# 分页器

<ClientOnly>
  <page-demo-1></page-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-page
  :totalPage="20"
  :currentPage.sync="currentPage"
  @update:currentPage="changePage"
></g-page>
<script>
  export default {
    data() {
      return {
        currentPage: 1,
      }
    },
    methods: {
      changePage() {
        //当前页码
        console.log(this.currentPage)
      },
    },
  }
</script>
```

:::

# Attributes

当数据量较多时，使用分页器进行数据切换。

| 参数        |   说明   |   类型 | 可选值 | 默认 |
| ----------- | :------: | -----: | -----: | ---: |
| totalPage   |  总页数  | Number |     -- |   -- |
| currentPage | 当前页数 | Number |     -- |   -- |
