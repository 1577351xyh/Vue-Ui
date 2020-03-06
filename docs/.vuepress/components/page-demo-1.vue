<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <g-page
      :totalPage="20"
      :currentPage.sync="currentPage"
      @update:currentPage="changePage"
    ></g-page>
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
import GPage from '../../../src/page/page'

export default {
  components: { GPage },
  data() {
    return {
      currentPage: 1,
      content: `
        <g-page :totalPage="20" :currentPage.sync="currentPage" @update:currentPage="changePage"></g-page>

        data:{
          currentPage:1,
        }

        methods:{
          pageSize(){
            //当前页码
            console.log(this.currentPage)
          }
        }`
        .replace(/^ {8}/gm, '')
        .trim()
    }
  },
  methods: {
    changePage() {
      //当前页码
      console.log(this.currentPage)
    }
  }
}
</script>
