<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <g-nav :selected.sync="selected">
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template slot="title">关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="tim">团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">qq</g-nav-item>
          <g-sub-nav name="phone">
            <template slot="title">手机</template>
            <g-nav-item name="cn">移动</g-nav-item>
            <g-nav-item name="cm">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="team">团队</g-nav-item>
    </g-nav>
  </div>
</template>

<script>
import GNav from '../../../src/nav/nav'
import GNavItem from '../../../src/nav/nav-item'
import GSubNav from '../../../src/nav/sub-nav'

export default {
  components: { GNav, GNavItem, GSubNav },
  data() {
    return {
      selected: ['home'],
    }
  },
}
</script>
