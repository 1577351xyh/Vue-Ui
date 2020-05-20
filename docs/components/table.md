---
title: Table 表格
---

# 表格

<ClientOnly>
  <table-demo-1></table-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-table
  :selectedItem.sync="selected"
  border
  :columns="columns"
  :dataSource="dataSource"
  :orderBy.sync="orderBy"
  @update:orderBy="orderByChange"
  :loading="loading"
  :height="400"
  :checkeds="true"
>
</g-table>
<script>
  export default {
    data() {
      return {
        selected: [],
        columns: [
          { text: '姓名', field: 'name', width: 200 },
          { text: '分数', field: 'score' },
        ],
        //排序规则
        orderBy: {
          //true 默认排序(有排序规则) null没有排序
          name: 'asc',
          score: 'desc',
        },
        dataSource: [
          { id: 1, name: '张三', score: '99' },
          { id: 2, name: '李四', score: '98' },
          { id: 3, name: '王五', score: '97' },
          { id: 4, name: '赵六', score: '96' },
          { id: 5, name: '张三', score: '99' },
          { id: 6, name: '李四', score: '98' },
          { id: 7, name: '王五', score: '97' },
          { id: 8, name: '赵六', score: '96' },
          { id: 9, name: '张三', score: '99' },
          { id: 10, name: '李四', score: '98' },
          { id: 13, name: '王五', score: '97' },
          { id: 14, name: '赵六', score: '96' },
          { id: 11, name: '张三', score: '99' },
          { id: 12, name: '李四', score: '98' },
          { id: 15, name: '王五', score: '97' },
          { id: 16, name: '赵六', score: '96' },
        ],
        loading: false,
      }
    },
    methods: {
      orderByChange() {
        this.loading = true
        setTimeout(() => {
          console.log(this.orderBy)
          this.loading = false
        }, 2000)
      },
    },
  }
</script>
```

:::

<ClientOnly>
  <table-demo-2></table-demo-2>
</ClientOnly>

::: details 查看代码

```html
<g-table
  :selectedItem.sync="selected"
  border
  :columns="columns"
  :dataSource="dataSource"
  :orderBy.sync="orderBy"
  @update:orderBy="orderByChange"
  :loading="loading"
  :height="400"
  :checkeds="true"
  :expendField="true"
></g-table>
<script>
  export default {
    data() {
      return {
        selected: [],
        columns: [
          { text: '姓名', field: 'name', width: 200 },
          { text: '分数', field: 'score' },
        ],
        //排序规则
        orderBy: {
          //true 默认排序(有排序规则) null没有排序
          name: 'asc',
          score: 'desc',
        },
        dataSource: [
          { id: 1, name: '张三', score: '99', expendField: 'aaaaa' },
          { id: 2, name: '李四', score: '98', expendField: 'bbbbb' },
          { id: 3, name: '王五', score: '97' },
          { id: 4, name: '赵六', score: '96' },
          { id: 5, name: '张三', score: '99' },
          { id: 6, name: '李四', score: '98' },
          { id: 7, name: '王五', score: '97' },
          { id: 8, name: '赵六', score: '96' },
          { id: 9, name: '张三', score: '99' },
          { id: 10, name: '李四', score: '98' },
          { id: 13, name: '王五', score: '97' },
          { id: 14, name: '赵六', score: '96' },
          { id: 11, name: '张三', score: '99' },
          { id: 12, name: '李四', score: '98' },
          { id: 15, name: '王五', score: '97' },
          { id: 16, name: '赵六', score: '96' },
        ],
        loading: false,
      }
    },
    methods: {
      orderByChange() {
        this.loading = true
        setTimeout(() => {
          console.log(this.orderBy)
          this.loading = false
        }, 2000)
      },
    },
  }
</script>
```

:::

<ClientOnly>
  <table-demo-3></table-demo-3>
</ClientOnly>

::: details 查看代码

```html
<g-table
  :selectedItem.sync="selected"
  :border="true"
  :columns="columns"
  :dataSource="dataSource"
  :orderBy.sync="orderBy"
  @update:orderBy="orderByChange"
  :loading="loading"
  :height="400"
  :checkeds="true"
  :expendField="true"
>
  <template slot-scope="item">
    <button @click="edit(item.item)">编辑</button>
    <button @click="view(item.item)">查看</button>
  </template>
</g-table>
<script>
  export default {
    data() {
      return {
        selected: [],
        columns: [
          { text: '姓名', field: 'name', width: 200 },
          { text: '分数', field: 'score' },
        ],
        //排序规则
        orderBy: {
          //true 默认排序(有排序规则) null没有排序
          name: 'asc',
          score: 'desc',
        },
        dataSource: [
          { id: 1, name: '张三', score: '99', expendField: 'aaaaa' },
          { id: 2, name: '李四', score: '98', expendField: 'bbbbb' },
          { id: 3, name: '王五', score: '97' },
          { id: 4, name: '赵六', score: '96' },
          { id: 5, name: '张三', score: '99' },
          { id: 6, name: '李四', score: '98' },
          { id: 7, name: '王五', score: '97' },
          { id: 8, name: '赵六', score: '96' },
          { id: 9, name: '张三', score: '99' },
          { id: 10, name: '李四', score: '98' },
          { id: 13, name: '王五', score: '97' },
          { id: 14, name: '赵六', score: '96' },
          { id: 11, name: '张三', score: '99' },
          { id: 12, name: '李四', score: '98' },
          { id: 15, name: '王五', score: '97' },
          { id: 16, name: '赵六', score: '96' },
        ],
        loading: false,
      }
    },
    methods: {
      orderByChange() {
        this.loading = true
        setTimeout(() => {
          console.log(this.orderBy)
          this.loading = false
        }, 2000)
      },
      edit(item) {
        console.log(item)
        alert(item.id)
      },
      view(item) {
        alert(item.id)
      },
    },
  }
</script>
```

:::

# Attributes

在有限的空间内循环播放图片、文字等内容

| 参数         |                 说明                 |    类型 |             可选值 |  默认 |
| ------------ | :----------------------------------: | ------: | -----------------: | ----: |
| dataSource   |                数据源                |   Array |                 -- |    -- |
| columns      |              表头数据源              |   Array |                 -- |    -- |
| height       |      table 高度(包含表头,必填)       |  Number |                 -- |    -- |
| loading      |             排序加载状态             | Boolean |         true,false | false |
| orderBy      |  表头数据源中 field 字段的排序规则   |  Object | asc,desc,true,null |    -- |
| selectedItem | 选中的 item 所在的数组(全选反选必填) |   Array |                    |    -- |
| compact      | td padding 间距 (true:4px,fasle:8px) | Boolean |         true,false | false |
| border       |         table 是否有 border          | Boolean |         true,false | false |
| checkeds     |            全选,反选功能             | Boolean |         true,false | false |
| expendField  |             tr 折叠内容              | Boolean |         true,false | false |
