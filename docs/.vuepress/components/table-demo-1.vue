<template>
  <div style="padding-top: 16px;">
    <h2>基本展示</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-table :columns="columns" :dataSource="dataSource"></g-table>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import GTable from '../../../src/table/table'

export default {
  components: { GTable },
  data() {
    return {
      columns:[
        {text:'姓名',field:'name'},
        {text:'分数',field:'score'}
      ],
      dataSource:[
        {id:1,name:"张三",score:'99'},
        {id:2,name:"李四",score:'98'},
        {id:3,name:"王五",score:'97'},
        {id:4,name:"赵六",score:'96'}
      ],
      content: `
      <g-page :totalPage="20" :currentPage.sync="currentPage" @pageSize="pageSize"></g-page>
      data:{
        currentPage:1,
      }
      methods:{
        pageSize(page){
          //当前页码
          console.log(page)
        }
      }`
        .replace(/^ {8}/gm, '')
        .trim()
    }
  },
  methods: {}
}
</script>
