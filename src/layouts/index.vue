<template>
  <div class="content-main">
    <p class="title">X-Ui</p>
    <p class="content">一套基于 Vue的 UI 组件库 : 简约 轻巧 好用</p>
    <div class="btn">
      <a href="/#/main" class="btn1">开始使用</a>
      <a
        class="gitIcon btn2"
        href="https://github.com/1577351xyh/Vue-Ui"
        target="_blank"
      >
        <!-- <x-icon name="github"></x-icon> -->
        GitHub
      </a>
    </div>
    <img src="/assets//content.png" alt="" />
  </div>
</template>
<script>
// import XIcon from '/src/icon/icon.vue'

export default {
  data() {
    return {}
  },
  components: {
    // XIcon,
  },
}
</script>
<style lang="less" scope>
.content-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  .title {
    font-size: 34px;
    margin: 0;
    line-height: 48px;
    color: #555;
  }
  .content {
    font-size: 18px;
    line-height: 28px;
    color: #888;
    margin: 10px 0 5px;
  }
  .btn {
    display: flex;
    > a {
      display: inline-block;
      border-radius: 20px;
      padding: 12px 23px;
      color: #fff;
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      margin: 0 10px;
      cursor: pointer;
      border: 1px solid #dcdfe6;
    }
    > .btn1 {
      background-color: #409eff;
      border-color: #409eff;
    }
    > .btn2 {
      border-color: #409eff;
      color: #409eff;
      background-color: #fff;
    }
  }
}
img {
  width: 60%;
  margin: 0 auto;
}
</style>
