<template>
  <div style="padding-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>上中下三栏布局，主体部分带侧边栏 </strong>
    </p>

    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-layout>
        <g-sider
          style="height: 100px; background:#ddd; width:200px; color: black;"
          closeButton
        >
          sider
        </g-sider>
        <g-content style="height: 100px; background:#bbb;">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import GLayout from '../../../src/layout/layout'
import GHeader from '../../../src/layout/header'
import GFooter from '../../../src/layout/footer'
import GContent from '../../../src/layout/content'
import GSider from '../../../src/layout/sider'

export default {
  components: { GLayout, GHeader, GFooter, GContent, GSider },
  data() {
    return {}
  },
}
</script>
