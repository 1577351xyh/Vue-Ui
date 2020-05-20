---
title: Cascader 多级联动
---

# Cascader 省市级联动

<ClientOnly>
  <cascader-demo-1></cascader-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-cascader :selected.sync="selected" itemheight="'40px'" :source="array">
</g-cascader>

<script>
  export default {
    data() {
      return {
        selected: [],
        array: [
          {
            name: '汉洲',
            children: [{ name: '上城' }, { name: '上城2' }, { name: '上城3' }],
          },
          {
            name: '嘉兴',
            children: [{ name: '南湖' }, { name: '南湖1' }, { name: '南湖2' }],
          },
          {
            name: '福建',
            children: [
              {
                name: '福州',
                children: [{ name: '台江' }, { name: '仓山' }],
              },
            ],
          },
        ],
      }
    },
  }
</script>
```

:::

# Attributes

| 参数       |      说明      |   类型 | 可选值 | 默认 |
| ---------- | :------------: | -----: | -----: | ---: |
| selected   | 当前被选中的值 |  Array |     -- |   -- |
| itemheight |  item 的高度   | String |     -- |   -- |
| source     |   渲染的数组   |  Array |     -- |   -- |
