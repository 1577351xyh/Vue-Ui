<template>
  <div style="padding-top: 16px;">
    <h2>提供一些常用的icon图标</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-icon name="left"></g-icon>
    <g-icon name="right"></g-icon>
    <g-icon name="settings"></g-icon>
    <g-icon name="xia"></g-icon>
    <g-icon name="shang"></g-icon>
    <g-icon name="loading"></g-icon>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Icon from '../../../src/icon/icon'

export default {
  components: {
    'g-icon': Icon
  },
  data() {
    return {
      content: `
        <g-icon name="left"></g-icon>
        <g-icon name="right"></g-icon>
        <g-icon name="settings"></g-icon>
        <g-icon name="xia"></g-icon>
        <g-icon name="shang"></g-icon>
        <g-icon name="loading"></g-icon>
      `
        .replace(/^ {8}/gm, '')
        .trim()
    }
  }
}
</script>
