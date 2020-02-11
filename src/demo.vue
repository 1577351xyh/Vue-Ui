<template>
  <div>
    {{ selected }}
    <!-- <Form-sample></Form-sample> -->
    <g-table
      :selectedItem.sync="selected"
      border
      :columns="columns"
      :dataSource="dataSource"
      :orderBy.sync="orderBy"
      @update:orderBy="orderByChange"
    ></g-table>
  </div>
</template>

<script>
// import FormSample from "./Form/index";
import GTable from './table/table'
export default {
  name: '',
  data() {
    return {
      selected: [],
      columns: [
        { text: '姓名', field: 'name' },
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
        { id: 4, name: '赵六', score: '96' }
      ]
    }
  },
  components: {
    GTable
  },
  methods: {
    orderByChange(){
      console.log(this.orderBy)
    }
  }
}
</script>

<style scoped lang="scss"></style>
