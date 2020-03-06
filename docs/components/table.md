---
title: table 表格
---

# 表格

<ClientOnly>
  <table-demo-1></table-demo-1>
  <table-demo-2></table-demo-2>
  <table-demo-3></table-demo-3>
</ClientOnly>

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
