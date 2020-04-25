<template>
  <div style="padding-top: 16px;">
    <h2>基本展示</h2>
    <p>
      <strong>全选和反选</strong>
    </p>

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
  </div>
</template>

<script>
import GTable from '../../../src/table/table'

export default {
  components: { GTable },
  data() {
    return {
      selected: [],
      columns: [
        { text: '姓名', field: 'name', width: 200 },
        { text: '分数', field: 'score' }
      ],
      //排序规则
      orderBy: {
        //true 默认排序(有排序规则) null没有排序
        name: 'asc',
        score: 'desc'
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
        { id: 16, name: '赵六', score: '96' }
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
    }
  }
}
</script>
<style scope>
* {
  box-sizing: border-box;
}
table {
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  display: table;
}
</style>
