<template>
  <div>
    <!-- <Form-sample></Form-sample> -->
    <g-table border :columns="columns" :dataSource="dataSource"></g-table>
  </div>
</template>

<script>
// import FormSample from "./Form/index";
import GTable from './table/table'
export default {
  name: '',
  data() {
    return {
      selected: ['home'],
      columns: [
        { text: '姓名', field: 'name' },
        { text: '分数', field: 'score' }
      ],
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
  }
}
</script>

<style scoped lang="scss"></style>
